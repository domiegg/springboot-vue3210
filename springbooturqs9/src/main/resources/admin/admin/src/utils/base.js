const base = {
    get() {
        return {
            url : "http://localhost:8080/springbooturqs9/",
            name: "springbooturqs9",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springbooturqs9/front/dist/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "智能停车计费系统设计与实现"
        } 
    }
}
export default base
