/**
 * Created by ATILLA on 17/08/2015.
 */
angular.module('bootstrapApp')
    .controller('CadastroPessoaController', CadastroPessoaController);

CadastroPessoaController.$inject = ['$scope'];

function CadastroPessoaController($scope) {

    $scope.pessoa = {};
    $scope.pessoa.dataNascimento = {};
    $scope.pessoa.cidade = {};

    $scope.cidades = [
        {
            nome: 'Goiânia',
            estado: 'GO'
        },
        {
            nome: 'Uberlândia',
            estado: 'MG'
        },
        {
            nome: 'Florianópolis',
            estado: 'SC'
        }
    ];

    $scope.label = function() {
        return
    };

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
        alert(pessoa.dataNascimento);
    };

    $scope.excluir = function() {
    };

    $scope.limpar = function() {
    };
}