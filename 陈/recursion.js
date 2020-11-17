//递归形成树结构，后台系统常用

const listToTree = function(data, pid, id) {
    // 没有父节点的数据
    const parent = data.filter(value => value[pid] === 0);

    // 有父节点的数据
    const child = data.filter(value => value[pid] !== 0);


    // 定义转换方法的具体实现
    const translator = (parents, children) => {
        // 遍历父节点数据
        parents.forEach((item) => {
            // 遍历子节点数据permission-list.component.ts
            children.forEach((current, index) => {
                // 此时找到父节点对应的一个子节点
                // if (current.pid === parent.id) {
                if (current[pid] === item[id]) {
                    // 对子节点数据进行深复制，这里只支持部分类型的数据深复制，
                    const temp = JSON.parse(JSON.stringify(children));
                    // 让当前子节点从temp中移除，temp作为新的子节点数据，这里是为了让递归时，子节点的遍历次数更少，如果父子关系的层级越多，越有利
                    temp.splice(index, 1);
                    // 让当前子节点作为唯一的父节点，去递归查找其对应的子节点
                    translator([current], temp);
                    // 把找到子节点放入父节点的children属性中
                    if (typeof item.children !== 'undefined') {
                        item.children.push(current);
                    } else {
                        // eslint-disable-next-line no-param-reassign
                        item.children = [current];
                    }
                }
            });
        });
    };

    // 调用转换方法
    translator(parent, child);
    // 返回最终的结果
    return parent;
}