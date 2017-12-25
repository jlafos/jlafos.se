function tab(projecttype) {
  // masque tout
  var x = document.getElementsByClassName('project');
  for (var i = 0; i < x.length; i++) {
    x[i].classList.remove('project-active');
    x[i].classList.add('project-inactive');
  }
  // n'affiche que les projecttype
  var x = document.getElementsByClassName(projecttype);
  for (var i = 0; i < x.length; i++) {
    x[i].classList.remove('project-inactive');
    x[i].classList.add('project-active');
  }
}
