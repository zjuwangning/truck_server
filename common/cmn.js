/**
 * Created by Reid on 2020-05-25 09:01
 *
 * 一些通用函数
 */

function isEmpty(o) {
    if (o === null || o === undefined)
        return true
    switch (typeof o) {
        case "boolean":
            return false
        case "object":
            for (let t in o)
                return false
            return true
        case "array":
        case "string":
            return o.length <= 0
        case "number":
            return o.toString().length <= 0
        case "function":
            return false
    }
    return true
}

module.exports = {
    isEmpty,
}
