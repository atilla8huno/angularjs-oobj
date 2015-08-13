/**
 * Created by ATILLA on 11/08/2015.
 */
angular.module('bootstrapApp')
        .controller('BootstrapCtrl', BootstrapCtrl);

BootstrapCtrl.$inject = ['$scope', '$growl'];

function BootstrapCtrl($scope, $growl) {
    $scope.pessoa = {};
    $scope.pessoa.nome = '';
    $scope.pessoa.sobrenome = '';
    $scope.pessoa.dataNascimento = '';
    $scope.pessoa.sexo = '';
    $scope.pessoa.cor = '';

    $scope.pessoas = [];

    $scope.gridItemClick = function(row, col, colIndex) {
    };

    $scope.gridOptions = {
        data: 'pessoas',
        columnDefs: [
            { name: 'Nome', field: 'nome', cellTemplate: 'cellTamplate.html' },
            { name: 'Sobrenome', field: 'sobrenome' },
            { name: 'Data de Nascimento', field: 'dataNascimento' },
            { name: 'Sexo', field: 'sexo' },
            { name: 'Cor', rowTemplate: 'rowTamplateStyle.html' },
            { name: 'Ações', cellTemplate: 'cellTamplateButton.html' }
        ],
        enableRowSelection: true,
        enableColumnMenus: false
    };

    $scope.getRowStyle = function (row) {
        var rowStyle = {};
        if (angular.isDefined(row.entity.cor)) {
            rowStyle.backgroundColor = row.entity.cor;
        }
        return rowStyle;
    };

    $scope.salvar = function() {
        if ($scope.myForm.$invalid) {
            $growl.box('Erro', 'Verifique se todos os campos do formulário foram preenchidos corretamente.', {
                class: 'danger',
                timeout: 4000
            }).open();
            return;
        }

        $scope.pessoas.push($scope.pessoa);
        $scope.limpar();
    };

    $scope.excluir = function() {
        $scope.pessoas.splice($scope.pessoas.indexOf($scope.pessoa), 1);
        $scope.limpar();
    };

    $scope.excluirPessoa = function(pessoa) {
        $scope.pessoas.splice($scope.pessoas.indexOf(pessoa), 1);
        $scope.limpar();
    };

    $scope.limpar = function() {
        $scope.pessoa = {};
        $scope.myForm.$pristine = true;
    };

    $scope.editar = function(pessoa) {
        $scope.pessoa = pessoa;
    };
}