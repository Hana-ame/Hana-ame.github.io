# mysql的一些备忘

## 这次是找原来的论文都放在哪里了

```sql
show tables;
```

```sql
show create table board;
show create table thread;

-- | board | CREATE TABLE `board` (
--   `bid` int(10) unsigned NOT NULL DEFAULT 0,
--   `tid` int(10) unsigned NOT NULL DEFAULT 0,
--   `last` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
--   `del` tinyint(4) NOT NULL DEFAULT 0,
--   `replynum` int(10) unsigned NOT NULL DEFAULT 0,
--   PRIMARY KEY (`bid`,`tid`)
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci |

-- | thread | CREATE TABLE `thread` (
--   `t` varchar(255) NOT NULL DEFAULT '',
--   `n` varchar(255) NOT NULL DEFAULT '',
--   `ts` timestamp NOT NULL DEFAULT current_timestamp(),
--   `id` varchar(255) NOT NULL DEFAULT '',
--   `no` int(10) unsigned NOT NULL AUTO_INCREMENT,
--   `p` varchar(4096) NOT NULL DEFAULT '',
--   `txt` text NOT NULL,
--   `r` int(10) unsigned NOT NULL DEFAULT 0,
--   `del` tinyint(4) NOT NULL DEFAULT 0,
--   `c` varchar(4) NOT NULL DEFAULT '',
--   `ip` varchar(255) NOT NULL DEFAULT '',
--   PRIMARY KEY (`no`)
-- ) ENGINE=InnoDB AUTO_INCREMENT=135241 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci |
```

根据你的需求，可以使用以下SQL语句：

```sql
-- 查询所有board的bid=56562的条目，取出这些tid
SELECT tid FROM board WHERE bid = 56562;

-- 查询thread中所有的no = 上述tid的情况，和所有r = 上述tid的情况，全都设置del = 0
UPDATE thread
SET del = 0
WHERE no IN (SELECT tid FROM board WHERE bid = 56562)
OR r IN (SELECT tid FROM board WHERE bid = 56562);
```

请注意，这两个语句需要在同一个事务中执行，以确保数据的一致性。

如果你想在一个语句中完成这两个操作，可以使用以下语句：

```sql
UPDATE thread
SET del = 0
WHERE no IN (SELECT tid FROM board WHERE bid = 56562)
OR r IN (SELECT tid FROM board WHERE bid = 56562);
```

这条语句会直接更新thread表中的数据，而不需要先查询出tid。

完美