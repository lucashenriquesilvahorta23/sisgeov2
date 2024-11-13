<!-- Left side column. contains the logo and sidebar -->
<style>
  .treeview-menu a {
    /* word-wrap: break-word;
    white-space: normal;  */
  }

</style>
<aside class="main-sidebar bg-login" style="width: 300px">
    <!-- sidebar-->
    <section class="sidebar">
      
      <!-- sidebar menu-->
      <ul class="sidebar-menu" data-widget="tree">
        <li class="user-profile treeview">
          <a href="#">
            <span>Usuário: <?php $this->session = \Config\Services::session();
        $this->usuario = $this->session->get('dadoslogin'); echo $this->usuario->NOME;?></span><br>
            <span>Perfil: <?php echo cargo($this->usuario->TIPO);?></span><br><br>
            <span><?php setlocale(LC_TIME, 'pt_BR.UTF-8'); echo strftime('%A, %d de %B de %Y');?></span><br><br>
          </a>
        </li>
        <li class="<?php if(substr($_SERVER["REQUEST_URI"], 1) == 'Home'){echo 'active';}?>">
          <a href="/Home">
            <i class="fa fa-home"></i> <span>Início</span>
          </a>
        </li>
        <?php
          $varmenu = '';
          foreach($permissaomenu->getResult() as $menu){
              // Verifica se o link atual corresponde ao menu
              if($menu->LINK == substr($_SERVER["REQUEST_URI"], 1)){
                  $active = ' class="active"';
              } else {
                  // Verifica se há submenus
                  if(count($menu->submenu->getResult()) > 0){
                      $active = ' class="treeview"';
                  } else {
                      $active = '';
                  }
              }
              
              $varmenu = $varmenu.'
              <li '.$active.'>';
                  $varmenu = $varmenu.'<a href="'.base_url().$menu->LINK.'">';
                  $varmenu = $varmenu.'<i class="'.$menu->ICONE.'"></i>
                      <span>'.$menu->DESCRICAO.'</span>';
                      // Verifica se há submenus
                      if(count($menu->submenu->getResult()) > 0){
                          $varmenu = $varmenu.'<span class="pull-right-container"><i class="fa fa-angle-right pull-right"></i>
                          </span>';
                      }
                  $varmenu = $varmenu.' </a>
              ';
              // Adiciona submenus, se existirem
              if(count($menu->submenu->getResult()) > 0){
                  $varmenu = $varmenu.'<ul class="treeview-menu">';
                      foreach ($menu->submenu->getResult() as $submenu){
                          if($submenu->LINK == substr($_SERVER["REQUEST_URI"], 1)){
                              $active = ' active ';
                              $varmenu = str_replace('editarativo', 'class="treeview menu-open"', $varmenu);
                          } else {
                              $active = '';
                          }
                          $varmenu = $varmenu.'<li class="'.$active.'"><a href="'.base_url().$submenu->LINK.'"><i class="'.$submenu->ICONE.'"></i>&nbsp' .$submenu->DESCRICAO.'</a></li>';
                      }
                  $varmenu = $varmenu.'</ul> ';
              }
              $varmenu = $varmenu. '</li>'; 
              echo $varmenu;
              $varmenu = '';
          }
          ?>   
          <li class="treeview"><a href="/"><i class="fa fa-file-o"></i>
        <span>Documentos</span><span class="pull-right-container"><i class="fa fa-angle-right pull-right"></i>
        </span></a>
          <ul class="treeview-menu">
            <li class="treeview">
              <a href="#">Atas <span class="pull-right-container"><i class="fa fa-angle-right pull-right"></i></span></a>
              <ul class="treeview-menu">
                <li><a style="margin-left: -17px; color: #a3bdff;" href="/Documento/AtaDeResultadosFinais">Ata de Resultados Finais</a></li>
              </ul>
            </li>
            <li class="treeview">
              <a href="#">Declarações <span class="pull-right-container"><i class="fa fa-angle-right pull-right"></i></span></a>
              <ul class="treeview-menu">
                <li><a style="margin-left: -17px; color: #a3bdff;" href="/Documento/DeclaracaoDeConclusao">Declaração de Conclusão</a></li>
                <li><a style="margin-left: -17px; color: #a3bdff;" href="/Documento/DeclaracaoDeFrequencia">Declaração de Frequência</a></li>
                <li><a style="margin-left: -17px; color: #a3bdff;" href="/Documento/DeclaracaoParaTransferenciaEmCurso">Declaração para Transferência</a></li>
                <li><a style="margin-left: -17px; color: #a3bdff;" href="/Documento/HistoricoEscolar">Declaração de Histórico Escolar</a></li>
                <li><a style="margin-left: -17px; color: #a3bdff;" href="/Documento/DeclaracaoProfissionalAdmitido">Declaração de Profissional</a></li>
                <li><a style="margin-left: -17px; color: #a3bdff;" href="/Documento/DeclaracaoProfissionalDesligado">Declaração de Tempo de Serviço</a></li>
                <li><a style="margin-left: -17px; color: #a3bdff;" href="/Documento/DeclaracaoComparecimento">Declaração de Comparecimento</a></li>



              </ul>
            </li>
            <li class="treeview">
              <a href="#">Encaminhamentos <span class="pull-right-container"><i class="fa fa-angle-right pull-right"></i></span></a>
              <ul class="treeview-menu">
                <li><a style="margin-left: -17px; color: #a3bdff;" href="/Documento/EncaminhamentoNIS">Encaminhamento NIS</a></li>
              </ul>
            </li>
            <li class="treeview">
              <a href="#">Fichas <span class="pull-right-container"><i class="fa fa-angle-right pull-right"></i></span></a>
              <ul class="treeview-menu">
                <li><a style="margin-left: -17px; color: #a3bdff;" href="/Documento/FichaDeMatricula">Ficha do Aluno</a></li>
                <li><a style="margin-left: -17px; color: #a3bdff;" href="/Documento/FichaSaude">Ficha de Saúde</a></li>
                <li><a style="margin-left: -17px; color: #a3bdff;" href="/Documento/FichaDeProfissional">Ficha do Profissional</a></li>
                <li><a style="margin-left: -17px; color: #a3bdff;" href="/Documento/FichaObs">Ficha de Observação</a></li>
                <li><a style="margin-left: -17px; color: #a3bdff;" href="/Documento/ComprovanteMatricula">Ficha de Matricula</a></li>
              </ul>
            </li>
            <li class="treeview">
              <a href="#">Relatórios <span class="pull-right-container"><i class="fa fa-angle-right pull-right"></i></span></a>
              <ul class="treeview-menu">
                <li><a style="margin-left: -17px; color: #a3bdff;" href="/Documento/RelatorioDeAlunos">Relatório de Alunos</a></li>
                <li><a style="margin-left: -17px; color: #a3bdff;" href="/Documento/RelatorioDeAlunoPorTurma">Relatório de Aluno por Turma</a></li>
                <li><a style="margin-left: -17px; color: #a3bdff;" href="/Documento/RegistroIndividual">Relatório Individual</a></li>
                <li><a style="margin-left: -17px; color: #a3bdff;" href="/Documento/RegistroIndividualSala">Relatório de Diagnóstico da Sala</a></li>
                <li><a style="margin-left: -17px; color: #a3bdff;" href="/Documento/RelatorioDeAlunosComPatologiasEspecificas">Relatório de Saúde</a></li>
                <li><a style="margin-left: -17px; color: #a3bdff;" href="/Documento/RelatorioDeOcorrencias">Relatório de Ocorrências</a></li>
                <li><a style="margin-left: -17px; color: #a3bdff;" href="/Documento/RelatorioDeFrequencia">Relatório de Frequência</a></li>
                <li><a style="margin-left: -17px; color: #a3bdff;" href="/Documento/RegistroDasVivenciasDesenvolvidas">Relatório de Vivências Desenvolvidas</a></li>
                <li><a style="margin-left: -17px; color: #a3bdff;" href="/Documento/RelatorioDeProfissionais">Relatório de Profissionais</a></li>
                <li><a style="margin-left: -17px; color: #a3bdff;" href="/Documento/RelatorioDeTurmas">Relatório de Turmas</a></li>
              </ul>
            </li>
            <li class="treeview">
              <a href="#">Termos <span class="pull-right-container"><i class="fa fa-angle-right pull-right"></i></span></a>
              <ul class="treeview-menu">
                <li><a style="margin-left: -17px; color: #a3bdff;" href="/Documento/TermoDeAutorizacaoParaUsoDeImagem">Termo Para Uso de Imagem</a></li>
                <li><a style="margin-left: -17px; color: #a3bdff;" href="/Documento/TermoDeCompromisso">Termo de Compromisso</a></li>
              </ul>
            </li>
            <li class="treeview">
              <a href="#">Indicadores <span class="pull-right-container"><i class="fa fa-angle-right pull-right"></i></span></a>
              <ul class="treeview-menu">
                <li><a style="margin-left: -17px; color: #a3bdff;" href="/Documento/IndicadoresFicha">Indicadores Ficha de Observação</a></li>
              </ul>
            </li>
            <li class="treeview">
              <a href="#">Carteirinhas <span class="pull-right-container"><i class="fa fa-angle-right pull-right"></i></span></a>
              <ul class="treeview-menu">
                <li><a style="margin-left: -17px; color: #a3bdff;" href="/Documento/Carteirinha">Carteirinha de identificação</a></li>
              </ul>
            </li>
            <li class="treeview">
              <a href="#">Folha de ponto <span class="pull-right-container"><i class="fa fa-angle-right pull-right"></i></span></a>
              <ul class="treeview-menu">
                <li><a style="margin-left: -17px; color: #a3bdff;" href="/Documento/PontoDeProfissional">Folha de ponto do profissional</a></li>
              </ul>
            </li>
          </ul>
        </li>

        <li class="">
          <a href="/Login/Sair">
            <i class="fa fa-sign-out"></i>
            <span>Sair</span>
          </a>
        </li>   
        
      </ul>
    </section>
  </aside>