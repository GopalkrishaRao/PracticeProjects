#
## Merger two objects
```
function mergeObjects(obj1, obj2) {
    return ({...obj1, ...obj2})
  }
```
```
function mergeObjects(obj1, obj2) {
    return Object.assign({}, obj1, obj2)
  }
```
```
function mergeObjects(obj1, obj2) {
    let newObj = {};
    for(key in obj1){
        newObj[key]=obj1[key]
    }
    for (key in obj2){
        newObj[key]=obj2[key]
    }
    return newObj
  }

```