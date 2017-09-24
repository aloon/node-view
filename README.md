build

```sh
git clone git@github.com:aloon/node-view.git
docker build -t node-view .
docker run -p 3000:3000 node-view
```


only exec
```sh
docker run -p 3000:3000 aloon/node-view
```
