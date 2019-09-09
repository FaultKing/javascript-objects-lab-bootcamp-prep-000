var recipes = {}

function updateObjectWithKeyAndValue(object,key, value) {
  var newObj = {};
  object.assign(newObj,object,{[key]:value})
  return newObj
};

function destructivelyUpdateObjectsWithKeyAndValut(object, key value){
  object[key] = value
  return object
}
