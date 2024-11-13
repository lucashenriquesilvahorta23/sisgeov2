<?php

namespace App\Controllers;

use App\Models\UsuarioModel;
use App\Models\AlunoModel;
use App\Models\TurmaModel;
use App\Models\ProfissionalModel;
use CodeIgniter\Controller;
use CodeIgniter\HTTP\RequestInterface;
use CodeIgniter\HTTP\ResponseInterface;
use Psr\Log\LoggerInterface;

class Home extends BaseController
{
    public function initController(
        RequestInterface $request,
        ResponseInterface $response,
        LoggerInterface $logger
    ) {
        parent::initController($request, $response, $logger);
        $this->usuarioModel = new UsuarioModel();
        $this->alunoModel = new AlunoModel();
        $this->turmaModel = new TurmaModel();
        $this->profissionalModel = new ProfissionalModel();
        $this->session = \Config\Services::session();
        $this->usuario = $this->session->get('dadoslogin');
        $this->escola = $this->session->get('escola');
        if($this->usuario == null){
            header('Location: '.base_url());
            exit(); 
        }
		date_default_timezone_set('America/Sao_Paulo');
        helper('complementos');
    }

    public function index()
    {
        $turmas = $this->turmaModel->getTurmaEscola($this->escola->ID_ESCOLA);

        $cont = 0;
        $anoAtual = date('Y');
        foreach ($turmas as $turma) {
            if($anoAtual == $turma->ANO){
                $cont++;
            }
        }

        $dados['turmas'] = $cont;

        $dados['alunos_matriculados'] = $this->turmaModel->getAlunoTurmatotalAlunos($this->escola->ID_ESCOLA);

        $dados['profisisonais'] = "";
        $situacao = "A";
        $cargo = "";
        if($this->usuario->TIPO == "AD"){
            //$profisisonais = $this->profissionalModel->getProfissional($situacao, $cargo);
            $profisisonais = $this->profissionalModel->getProfissionalEscola($this->escola->ID_ESCOLA, $situacao, $cargo);


            $cont = 0;
            foreach ($profisisonais as $profisisonaL) {
                $cont++;
            }
            $dados['profisisonais'] = $cont;

        }else{

            $profisisonais = $this->profissionalModel->getProfissionalEscola($this->escola->ID_ESCOLA, $situacao, $cargo);

            $cont = 0;
            foreach ($profisisonais as $profisisonaL) {
                $cont++;
            }
            $dados['profisisonais'] = $cont;
        }
        //$dados['inscritos'] = $this->turmaModel->getAlunosSemTurma($this->escola->ID_ESCOLA);
        $dados['inscritos'] = count($this->alunoModel->getAluno($this->escola->ID_ESCOLA));


        $mesAtual = date('n');
        $dados['aniversarios_aluno'] = $this->turmaModel->getAniversariantesDoMesAluno($mesAtual, $this->escola->ID_ESCOLA);
        $dados['aniversarios_professores'] = $this->turmaModel->getAniversariantesDoMesProfessor($mesAtual, $this->escola->ID_ESCOLA);

        $anoAtual = date('Y');
        $dados['proximos_Eventos'] = $this->turmaModel->getDatasAnoLetivo($anoAtual, $this->escola->ID_ESCOLA);

        



        
        

        echo view('commons/header');
        echo view('commons/navbartop');
        echo view('commons/navbarleft', getBarMenu($this->usuario));
        echo view('dash', $dados);
        echo view('commons/footer');
    }

    public function marcarComoLido($id){
        $dados = array();
        $dados['ID_NOTIFICACAO_FALTA_CHAMADA'] = $id;
        $dados['LIDO'] = "S";

        $insert_id = $this->turmaModel->updateNotificacao($dados);

        if($insert_id){
            return redirect()->to('/Home/index?tipo_msg=sucesso&msg=Ação realizada!');
        }else{
            return redirect()->to('/Home/index?tipo_msg=erro&msg=Erro ao realizar ação!');
        }
            
    }
}
