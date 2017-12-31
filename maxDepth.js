/*
找出一個二元樹的深度。
範例：
Tree1 depth = 3               Tree2 depth = 4 
   A                           3
  / \                         / \
 B   C                       4   4
    / \                     /  
   D   E                   2
                          /
                         3
##思路 這邊用遞迴求解，節點如果left或right有值，則level+1，並判斷left或right有沒有子節點，直到底層，轉換成公式如下：
   fn(n) = 0, if null;  
   fn(n) = 1 + max(f(n.left), f(n.right))　


以上面tree1為例  
*nodeA的深度 = 1 + max (nodeB深度 , nodeC深度) // B，C取深度較深的 
*nodeB 沒有子節點，nodeB depth = 1  
*nodeC 有子節點[D,E]，nodeB depth = 2    
*nodeA depth = 1 + 2 = 3

*/
var maxDepth = function(root) {
    return find(root); 
    
	// 定义一个递回函式
    function find(node){
        // 節點到底
        if(node === null){
            return 0;
        } 

        var deepL = 1;
        var deepR = 1;
        // 有左節點，往下一層找
        if(node.left !== null){
            deepL += find(node.left)
        }
        // 有右節點，往下一層找
        if(node.right !== null){
            deepR += find(node.right)
        }

        // 回傳較大的深度depth，給上一層節點
		//true 返回 deepL  false 返回 deepR
        return deepL > deepR ?　deepL: deepR;
    }
};