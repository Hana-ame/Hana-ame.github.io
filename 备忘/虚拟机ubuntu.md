# 虚拟机ubuntu

在 Linux 系统中添加磁盘的步骤一般包括以下几个主要步骤：识别新磁盘、分区、格式化，以及挂载。以下是详细的步骤说明：

### 1. 识别新磁盘

首先，插入新的硬盘或虚拟磁盘，然后使用以下命令查看系统识别到的磁盘：

```bash
lsblk
```
或者：
```bash
fdisk -l
```

你会看到类似 `/dev/sdb`、`/dev/sdc` 的设备名称，记住你新添加的磁盘的设备名。

### 2. 分区新磁盘

使用 `fdisk` 或 `parted` 工具对新磁盘进行分区。以下是用 `fdisk` 的示例：

```bash
sudo fdisk /dev/sdb
```

在 `fdisk` 提示符下，你可以使用以下命令：

- 输入 `n` 创建新分区。
- 选择分区类型（主分区或扩展分区）。
- 输入分区号，起始和结束扇区（一般可以按默认设置）。
- 输入 `w` 保存并退出。

### 3. 格式化新分区

创建分区后，你需要格式化它。假设你创建的分区是 `/dev/sdb1`，可以使用以下命令将其格式化为 ext4 文件系统：

```bash
sudo mkfs.ext4 /dev/sdb1
```

### 4. 创建挂载点

选择一个挂载点，通常是 `/mnt` 目录下的一个子目录。可以创建一个新的目录作为挂载点：

```bash
sudo mkdir /mnt/mydisk
```

### 5. 挂载新分区

将新分区挂载到刚才创建的挂载点：

```bash
sudo mount /dev/sdb1 /mnt/mydisk
```

### 6. 设置开机自动挂载（可选）

如果你希望在每次启动时自动挂载该分区，需要将其添加到 `/etc/fstab` 文件中：

1. **编辑 fstab 文件**：

```bash
sudo nano /etc/fstab
```

2. **在文件末尾添加一行**，假设你的分区是 `/dev/sdb1`，挂载点是 `/mnt/mydisk`：

```
/dev/sdb1 /mnt/mydisk ext4 defaults 0 2
```

3. **保存并退出**：按 `Ctrl + X`，然后按 `Y` 确认保存，接着按 `Enter` 退出。

### 7. 验证挂载

你可以使用以下命令确认分区是否已挂载：

```bash
df -h
```

以上步骤完成后，你的新磁盘就成功添加并挂载到系统中了。如果有其他问题或者需要进一步的帮助，请随时询问！

如果你想将整个磁盘设置为交换空间（swap），可以按照以下步骤进行。请注意，这将清除磁盘上的所有数据，因此请确保在执行此操作之前备份重要数据。

### 1. 确认磁盘

首先，确认你要设置为 swap 的磁盘。使用以下命令查看当前磁盘情况：

```bash
lsblk
```

### 2. 清除磁盘

使用 `fdisk` 或 `parted` 工具清除磁盘上的所有分区。假设你要设置的磁盘为 `/dev/sdb`，可以使用以下命令：

```bash
sudo fdisk /dev/sdb
```

在 `fdisk` 提示符下，可以使用以下命令：

- 输入 `o` 创建一个新的空的 DOS 分区表（会清除所有数据）。
- 输入 `w` 保存并退出。

### 3. 创建交换空间

1. **将整个磁盘设置为交换空间**：

```bash
sudo mkswap /dev/sdb
```

2. **启用交换空间**：

```bash
sudo swapon /dev/sdb
```

### 4. 验证交换空间

可以使用以下命令确认交换空间已启用：

```bash
sudo swapon --show
```

或者：

```bash
free -h
```

### 5. 设置开机自动挂载

为了在每次启动时自动启用该交换空间，需要将其添加到 `/etc/fstab` 文件中：

1. **编辑 fstab 文件**：

```bash
sudo nano /etc/fstab
```

2. **在文件末尾添加以下行**：

```
/dev/sdb none swap sw 0 0
```

3. **保存并退出**：按 `Ctrl + X`，然后按 `Y` 确认保存，接着按 `Enter` 退出。

### 完成设置

通过以上步骤，你就成功将整个磁盘设置为交换空间。如果有其他问题，请随时询问！

## 安装vscode

```sh
sudo apt install apt-transport-https
sudo apt update
sudo apt install code # or code-insiders
```

找不到，用snap吧。

