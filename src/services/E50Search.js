angular.module('e50FilterBar')
.factory('E50Search', function(E50Toggle) {

  // Filter bar search functionality
  function Search(override) {
    
    // Mixin toggle functionality
    angular.extend(this, E50Toggle);

    // Set the default text field
    this.text = "";

    // Set the default placeholder
    this.placeholder = "Search";

    // Set placeholder text
    this.setPlaceholder = function(placeholder) {
      this.placeholder = placeholder;
    };

    this.submit = function() {
      this.submitted = true;
      this.resultsFor = angular.copy(this.text);
      // perform fetch
    };
    
    this.clear = function() {
      this.submitted = false;
      this.text = "";
      // perform fetch
    };    
    
    // Extend/Override
    angular.extend(this, override);
  }

  // Indirectly expose the constructor
  return {
    new: function(override) {
      return new Search(override);
    }
  };
});