##H5发布流程

##一、静态资源命令行发布

#### 1、拉取代码，修改代码（根据每个仓库灵活操作）
``` ini
# 拉取仓库
git clone git@192.168.1.209:m/test.git
# 进入目录
cd src
# 新建分支（确保你新建的分支是线上没有的分支，具体可以到gitlab仓库上看一下，每次拉新分支保证从master拉）
git checkout -b dev/1.0.0
```
#### 2、打包编译代码（一般都是这个命令，具体可以看一package.json 配置）
``` ini
npm run build
```

#### 3、提交代码到开发环境 
```ini
git add .
git commit -m 'build'
git push origin dev/1.0.0 （push之后代码自动发布到测试服务器上）
``` 

#### 4、提交代码到线上环境
``` ini
git tag release/1.0.0
git push origin release/1.0.0（push之后代码自动发布到正式服务器上，自动合并到master，同一个tag只能push一次）
```


##二、cms发布（测试服务器）

#### #新页面发布

##### 1、新建html
![全局变量](http://cdn.myweimai.com/images/ca79f9bb465d1f8f5d46fcf5e44435e2_648x358.png?x-oss-process=image/resize,w_300,limit_0)

##### 2、填写页面信息(文件名一般就是你项目中新建的文件名，注意后面不要写.html,备注一般写title里面的文本)
![全局变量](http://cdn.myweimai.com/images/23b6ccb4a4899beb8c762d636cd234c1_786x318.png?x-oss-process=image/resize,w_300,limit_0)

##### 3、编辑html模版(一般就是把build之后的html粘过来，注意这里面红框路径写相对路径，黄色框的路径发布正式之后会自动被替换成正式路径)

![全局变量](http://cdn.myweimai.com/images/11c328d104a88939fa98b25de79e7400_1986x1080.png?x-oss-process=image/resize,w_800,limit_0)

##### 4、预览(点击保存、点击开发地址可以看到页面效果，这里可以把https改成http)

#### #老页面发布

##### 直接修改静态资源的版本号即可，版本号为你开发分支的分支号，点击保存

![全局变量](http://cdn.myweimai.com/images/3c7e502d88bc96a084cc99aff5928fe2_1980x1048.png?x-oss-process=image/resize,w_800,limit_0)



##三、cms发布(正式服务器)

##### 1、点击发布代码、填写备注

![全局变量](http://cdn.myweimai.com/images/54497bedb780e9061afebe098b7d4d92_986x242.png?x-oss-process=image/resize,w_800,limit_0)

![全局变量](http://cdn.myweimai.com/images/31f51f9122027d4c18ec09f38cbef588_1834x272.png?x-oss-process=image/resize,w_800,limit_0)

##### 2、点击发布上线、填写开发信息

![全局变量](http://cdn.myweimai.com/images/2bf216e1121eebdb2fd271f3637875e2_786x350.png?x-oss-process=image/resize,w_800,limit_0)
![全局变量](http://cdn.myweimai.com/images/14c42119f01c2a4d602fc786592ec4af_970x770.png?x-oss-process=image/resize,w_800,limit_0)


##### 3、代码妙级回滚
![全局变量](http://cdn.myweimai.com/images/6cc6bd01e49617c7884b0689ec41f861_1966x280.png?x-oss-process=image/resize,w_800,limit_0)

## 注意事项
* 先发布静态资源，在发布cms，保证cms发布后静态资源存在


