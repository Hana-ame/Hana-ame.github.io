# ai总结

基本上认为目前的ai研究没办法取得第一性原理。  


目前认为智能的形成完全是某种相似性的构建


目前的一些比如提示词方向的构造其实也符合这部分

## [一番实验后，有关Batch Size的玄学被打破了 | 机器之心](https://www.jiqizhixin.com/articles/2022-07-10-3)
batch需要的是正交。(自己想的)
不过怎么样才能把未知的东西变成正交呢。


## [minst_test/minst/dl.ipynb at master · Hana-ame/minst_test](https://github.com/Hana-ame/minst_test/blob/master/minst/dl.ipynb)
他描绘了一种什么样的关系


笔画 -> 印刷体 这是一个模型 这个模型中提出到字
手写体 -> 笔画 -> 字

分解印刷体笔画的模型。

笔画 -> 字体
这个过程有什么用吗

通过相互之间的关系，还原出

应该用笔画和笔顺

笔画应该从笔画库中取，得到最普适的笔画有哪些
这些笔画应该能够容忍一些变形

字，需要成为
起始点，笔画

体取出一堆笔画

然后再作为数据源，分类，求出最适合的几种笔画

如果根本分不开，就合并。

tokenizer
 


所以diffusion是一个denoising的过程
对于这个模型而言，一副完整的图像是噪声更小的。
