/**
 * Created by ATILLA on 17/08/2015.
 */
angular.module('bootstrapApp')
    .controller('CadastroPessoaController', CadastroPessoaController);

CadastroPessoaController.$inject = ['$scope'];

function CadastroPessoaController($scope) {

    $scope.$on('salvar', function(event, data) {
        alert('Salvou!');
    });

    $scope.$on('excluir', function(event, data) {
        alert('Excluiu!');
    });

    $scope.$on('limpar', function(event, data) {
        alert('Limpou!');
    });

    $scope.salvar = function() {
    };

    $scope.excluir = function() {
    };

    $scope.limpar = function() {
    };
}