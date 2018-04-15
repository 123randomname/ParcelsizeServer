
angular.
  module('parcelConfig').
  component('parcelSizes', {
	  transclude: true,
	  template:
    	'<div class="w3-panel w3-card-2">'+
    		'<div class="w3-container w3-teal">'+
    			'<h2>Paketgröße</h2>'+
    		'</div>' +
    		'<form class="w3-container">'+
    	  
   		  '<div class="w3-row">'+
   		  	'<label>Länge</label>'+
   		  	'<input class="w3-input" id="cfg-recp-street" type="text" ng-model="$ctrl.parcel.recipient.street">'+
   		  '</div>'+
	   	  '<div class="w3-row">'+
			  	'<label>Breite</label>'+
			  	'<input class="w3-input" id="cfg-recp-plz" type="text" ng-model="$ctrl.parcel.recipient.plz">'+
		  '</div>'+
		  '<div class="w3-row">'+
			  '<label>Tiefe</label>'+
			  '<input class="w3-input" id="cfg-recp-country" type="text" ng-model="$ctrl.parcel.recipient.country">'+
		  '</div>'+
		  
		  '<div class="w3-row">'+
		  '<div class="w3-cell">'+
		  '<input type="button" class="w3-button w3-teal" value="Größe berechnen">'+
 		  	'</div>'+
 		  	'<div class="w3-cell">'+
 		  	'<label>Paketgröße:</label>'+
		  	'<input class="w3-input" id="cfg-sent-nr" type="text" ng-model="$ctrl.parcel.sender.nr">'+
		  	'</div>'+
		  '</div>'+
		  
   		  '</form>'+
   		  '</div>',
    	
    controller: function ParcelAddressController($rootScope) {
    this.parcel = {
    	recipient: {name: '', street: '', nr: '', plz: '', city: '', country: ''},
    	sender: {name: '', street: '', nr: '', plz: '', city: ''},
    	size: '',
    	price: 0.0
    	
    };
      //$rootScope.sender = this.parcel.sent;
      //$rootScope.recipient = this.parcel.recipient;
      $rootScope.parceladdresses = this.parcel;
    }
  });
  
 
  
