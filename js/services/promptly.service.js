let PromptLyService = function($http, PARSE) {
  
  let url = PARSE.URL + 'classes/promptly';

  let checkAuth = function () {
    return true;
  };

  this.getPromptLys = function () {
    if (checkAuth()){     
      return $http({
        url: url,
        headers: PARSE.CONFIG.headers,
        method: 'GET',
        cache: true
      });
    }
  };

  this.getPromptLy = function (promptlyId) {  
    if (checkAuth()){     
      return $http({
        method: 'GET',
        url: url + '/' + promptlyId,
        headers: PARSE.CONFIG.headers,
        cache: true
      });
    }
  };

  let PromptLy = function (obj) {
    this.title = obj.title;
    this.author = obj.author;
    this.genre = obj.genre;
    this.prompt = obj.prompt;
    this.entry = obj.entry;
    this.photo = obj.photo;
    this.hasRead = false;
  };

  this.addPromptLy = function (obj) {
    let write = new PromptLy(obj);
    return $http.post(url, write, PARSE.CONFIG);
  };

  this.update = function (obj) {
    return $http.put(url + '/' + obj.objectId, obj, PARSE.CONFIG);
  };

  this.delete = function (obj) {
    return $http.delete(url + '/' + obj.objectId, PARSE.CONFIG);
  };

};

PromptLyService.$inject = ['$http', 'PARSE'];

export default PromptLyService;