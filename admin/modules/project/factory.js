services.factory('ProjectFactory', [function () {
  this.projectsRef = firebase.database().ref('projects');
  this.lastKey = null;

  this.newProject = function (newProject) {
    var key = this.projectsRef.push().key;
    console.log(key);
    this.lastKey = key;

    console.log(this.lastKey);
    console.log(this.getLastKey());
    return firebase.database()
            .ref('projects/' + key)
            .set(newProject);
  }

  this.getProjects = function () {
    return this.projectsRef;
  }

  this.getLastKey = function () {
    var key = this.lastKey;

    this.clearLastKey();
    return key;
  }

  this.clearLastKey = function () {
    this.lastKey = null;
  }

  return this;
}]);
