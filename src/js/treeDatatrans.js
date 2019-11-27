/**
 * @description 按照当前人员所在的部门为根节点将平行数据处理成树状数据
 * @param {String|null} currentNode 以当前id为根节点过滤，如果传空，递归整棵树
 * @param {Array} data 一组平行的树状数据，例如[{parentId:1,id:11,label:'xxx'},{id:1,label:'xxx'},{parentId:11,id:111,label:'xxxx'}]
 */
function tansFormData(currentNode, data) {
  let parents = data.filter(value => value.id === currentNode),
    children = data.filter(
      value => value.parentId !== '' && value.parentId !== null
    ),
    translator = (parents, children) => {
      parents.forEach(parent => {
        children.forEach((current, index) => {
          if (current.parentId === parent.id) {
            let temp = JSON.parse(JSON.stringify(children))
            temp.splice(index, 1)
            translator([current], temp)
            typeof parent.children !== 'undefined'
              ? parent.children.push(current)
              : (parent.children = [current])
          }
        })
      })
    }
  translator(parents, children)
  return parents
}
