// 角色对应权限路由
const roleToRoute = {
    "coustomer": [
        { name: "Product" },
        { name: "List" },
        { name: "Add" },
        { name: "Edit" },
    ],
    "admin": [
        { name: "Product" },
        { name: "List" },
        { name: "Add" },
        { name: "Category" },
        { name: "Edit" },
    ]
}

export default function getMenuRoute(role, routes) {
    // 获取角色对应权限
    const allowRoutesName = roleToRoute[role].map(item => item.name);
    const resultRoutes = routes.filter(r => {
        const obj = r;
        if (allowRoutesName.indexOf(r.name) !== -1) {    // 判断角色是否有对应路由
            const { children } = obj;
            // obj.children = children.filter(c => { 
            //     allowRoutesName.indexOf(c.name) !== -1;
            //     return true
            // });   // 判断角色是否有对应子路由
            obj.children = children.filter(c => allowRoutesName.indexOf(c.name) !== -1);
            return true;
        }
        return false;
    });
    return resultRoutes;
}

// export default function getMenuRoute(role, routes) {
//     const allowRoutesName = roleToRoute[role].map((item) => item.name);// 匹配对应角色权限
//     const resultRoutes = routes.filter((r) => {
//         const obj = r;
//         if (allowRoutesName.indexOf(r.name) !== -1) {
//             const { children } = obj;
//             obj.children = children.filter((c) => allowRoutesName.indexOf(c.name) !== -1);
//             return true;
//         }
//         return false;
//     });
//     return resultRoutes;
// }