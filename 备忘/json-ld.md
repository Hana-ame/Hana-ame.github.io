# json-ld 的一些笔记  
  
[JSON-LD - JSON for Linking Data](https://json-ld.org/)  
https://json-ld.org/contexts/person.jsonld  
  
有三个特殊的key，分别是  
- @context  
- @id  
- @type  
  
## @context 是什么  
一些标识  
key = 结构体中的key，起到将两者连接的作用  
指示  
单纯的值，指示这个key等同于什么  
结构体的情形  
@id：指示这个key指示的值  
@type：指示这个值的类型，@id的场合，代表是一个ID(还有别的吗)  
于是会用  
@type：person里的person去context找解析  
擦，那么@type：@type有是什么  
  
## @id 是什么  
是为了改变json名称不明的问题，把key换成这个部分  
  
.actor.name: Sally  
是什么  
  
  
值就是值，值需要做额外解析  
所有的键都要在context中解析  
值放入键中，变成@type取context，值变成@value  
值放入应为@id的位置，会从context取。  
@id代表类型，如果在context中指定结构体，那他本来是单值的地位  
  
## 看这里

context中的@id代表了key的id，解析出来还在key的位置上  
json中的@id代表了value的id，解析出来在value的位置上，指示struct的唯一标识  
@value是解析出的值  
  