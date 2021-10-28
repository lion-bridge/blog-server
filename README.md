- 发布文章
- 文章列表
- 评论

# 1.docker
- 执行命令: docker build -f Dockerfile.dev -t  wuchao/nest1 ./
    - -f(--file):指定`Dockerfile`文件
    - -t(--tag):指定镜像名称
    - `wuchao/nest1`:镜像名称
    - `./`:build目录

# 2.核心功能
### 2.1发布文章
- 1.上传图片服务
    - 上传
    - 删除
    - 查找
- 2.发布文章
- 3.查看文章
- 4.修改文章


# 3.nestjs核心知识
### 3.1文件上传
- [FileInterceptor-官方文档](https://docs.nestjs.com/techniques/file-upload#file-upload)
- [multer,express中间件-GitHub文档](https://github.com/expressjs/multer#multeropts)

### 3.2 Logger
[winston-github文档](https://github.com/winstonjs/winston)
[打印每个接口的request和response](https://stackoverflow.com/questions/55093055/logging-request-response-in-nest-js)
[如何使用Logger打印req和res](https://github.com/julien-sarazin/nest-playground/issues/1)

### 3.3 winston
[将Winston集成到nest Logger中](https://github.com/gremo/nest-winston)

### 3.4 雪花算法生成id

# 4.待办任务
- [ ] 1.使用`multer`进行文件上传
  - [ ] 多文件上传怎么处理
  - [ ] 如何确认是否上传成功
  - [ ] 把nestjs的文档盒multer的文档翻译，发到cscn上
- [ ] 2.使用`Logger`
  - [ ] 1.如何自定义logger
  - [ ] 2.使用winston讲log持久化
  - [ ] 4.打印请求和响应的日志
- [ ] 3.winston
  - [ ] 1.格式化：如何格式化保存到文件中
  - [ ] 2.如何格式化到console中输出 
  - [ ] 3.文章：翻译Winston的`transport`和`format`功能
  - [ ] 4.文章：如何使用Winston拦截请求和相应信息
