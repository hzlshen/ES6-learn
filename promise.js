var promise = new Promise(function(resolve, reject) {
    // ... some code
  
    if (11/* 异步操作成功 */
    ){
      resolve(value);
    } else {
      reject(error);
    }
  });