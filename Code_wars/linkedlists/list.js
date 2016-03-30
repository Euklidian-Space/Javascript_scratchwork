'use strict';

module.exports = (Node) => {
   
  let push = (head, data) => {
    let next_node = new Node(data);
    if(!head) return next_node;
    next_node.next = head;
    return next_node;
  };
  
  let buildOneTwoThree = generate_list(3, [2,1])
  
  let length = head => head ? length(head.next) + 1 : 0;
  
  let count = (head, data) => {
    head ?
      (head.data === data ? 1 : 0) + count(head.next, data) : 0
  };
  
  function generate_list(tail_data, args) {
    if(args.length === 0) return tail_data;
    let head;
    tail_data instanceof Node ? head = tail_data : head = new Node(tail_data);
    let data = args[0];
    args.shift();
    return generate_list(push(head,data), args);
  }
  
   return {push: push, buildOneTwoThree: buildOneTwoThree, generate_list:generate_list, length: length};  
}

