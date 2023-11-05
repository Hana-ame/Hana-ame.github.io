# 验证计划

用vcs，然后跑起来

装上uvm环境。
sub_module。

改一下激励，然后开始跑一下

从udpu开始分析，dlr模式
各个变量的来历，但是有些是从input来的。
理解意义之后放着。
写在代码里？加注释。
md也来一份。

写测试用的激励。
也不知道makefile洗好了没有。感觉是不是没写

# 亮点，值得写的

sync其实不知道做了啥
脱出`DONE`状态之后才能开始传输别的帧
~~说真的仿真一下快一点~~

为什么需要做sync
作用是什么，实现了什么
然而你又不用CDR 

scu_in_sync_state[3] 为什么会拉起来
会进入snd sync和rcv sync

在 mac 的 doc 文件夹里
