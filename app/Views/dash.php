<style>
	.fc-day-number {
    color: #9c9c9c; /* Altere a cor conforme desejado */
}

.image-container {
    position: relative;
}

.image-container img {
    display: block;
    width: 100%;
    height: auto;
}

.card {
    width: 100%; /* Mantenha o width como 100% para responsividade */
    height: 205px;
    background-color: #f49b5b;
    border-radius: 15px;
    position: relative;
    padding: 20px;
}

.bottom-strip {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50px;
    background-color: #dd5200;
    border-radius: 0 0 15px 15px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.card-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;
}

.card-text {
    font-size: 25px;
    color: #333;
    text-align: left;
}

.quantity {
    font-size: 30px;
    font-weight: bold;
}

.icon-container {
    margin-left: 40px;
}

.icon {
    width: 50px;
    height: 50px;
}

.link-text a {
    color: white;
    font-size: 25px;
    text-decoration: none;
}

@media (max-width: 576px) {
    .card-content {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    .icon-container {
        margin-left: 0;
        margin-top: 10px;
    }

    .icon {
        width: 40px;
        height: 40px;
    }

    .quantity {
        font-size: 25px;
    }

    .card {
        height: auto; /* Permite que o card ajuste a altura conforme o conteúdo */
    }
}

</style>
<style>
    .legenda {
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
		color: #000
    }
    .legenda-coluna {
        flex: 1; /* Cada coluna ocupa a mesma largura */
        margin-right: 20px; /* Espaçamento entre as colunas */
    }
    .legenda-item {
        display: flex;
        align-items: center;
        font-size: 12px;
        margin-bottom: 8px; /* Espaçamento entre os itens */
        white-space: nowrap; /* Evita quebra de linha */
    }
    .cor {
        display: inline-block;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        margin-right: 8px;
        border: 1px solid #00000020;
    }

	/* Reduz o tamanho da fonte dos números dos dias */
	.fc-day-number {
		font-size: 15px; /* Ajuste o tamanho conforme necessário */
	}

	/* Caso deseje ajustar também os números dos eventos */
	.fc-event {
		font-size: 15px; /* Ajuste o tamanho conforme necessário */
	}

	/* Reduz o tamanho da fonte dos eventos */
	.fc-event {
		font-size: 12px; /* Ajuste o tamanho conforme necessário */
	}

	/* Reduz o tamanho da fonte dos cabeçalhos dos dias */
	.fc-day-header {
		font-size: 12px; /* Ajuste o tamanho conforme necessário */
	}

	/* Reduz o tamanho da fonte do título do calendário */
	.fc-title {
		font-size: 12px; /* Ajuste o tamanho conforme necessário */
	}

</style>
<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper" style="margin-left: 300px" >
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>
	  <i class="fa fa-home"></i> Inicio
      </h1>
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
        <li class="breadcrumb-item active">Inicio</li>
      </ol>
    </section>

    <!-- Main content -->
    <section class="content">
		<div class="row">
			<div class="col-xl-12 col-md-12 col-12 ">
				<img src="/template/images/faixa2.jpg" alt="">
			</div>
		</div>
		<br>
		<div class="row">
			<div class="col-xl-3 col-md-6 col-12 com-sm-12">
				<div class="image-container">
					<div class="card">
						<div class="bottom-strip" style="display: flex; justify-content: center; align-items: center" > <span style="font-size: 25px" > <a href="/Documento/RelatorioDeAlunos"> Abrir </a> </span> <br> </div>
						<div style="display: flex;justify-content: center;align-items: center; margin-top: 30px" >
							<div>
								<span style="font-size: 25px" > <span style="font-size: 30px;" > <?= $alunos_matriculados->QTD_ALUNO; ?> </span> <br> Matriculados </span> <br>
							</div>
							<div>
								<img style="width: 50px; height: 50px; float: right; margin-left: 40px" src="/template/images/formatura.png" alt="">
							</div>
						</div>

					</div>

				</div>
			</div>
			<div class="col-xl-3 col-md-6 col-12 com-sm-12">
				<div class="image-container">
					<div class="card">
						<div class="bottom-strip" style="display: flex; justify-content: center; align-items: center" > <span style="font-size: 25px" > <a href="/Profissional"> Abrir  </a> </span> <br> </div>
						<div style="display: flex;justify-content: center;align-items: center; margin-top: 30px" >
							<div>
								<span style="font-size: 25px" > <span style="font-size: 30px;" > <?= $profisisonais; ?> </span> <br> Profissionais </span> <br>
							</div>
							<div>
								<img style="width: 50px; height: 50px; float: right; margin-left: 40px" src="/template/images/profisisonal.png" alt="">
							</div>
						</div>

					</div>

				</div>
			</div>
			<div class="col-xl-3 col-md-6 col-12 com-sm-12">
				<div class="image-container">
					<div class="card">
						<div class="bottom-strip" style="display: flex; justify-content: center; align-items: center" > <span style="font-size: 25px" > <a href="/Aluno"> Abrir </a> </span> <br> </div>
						<div style="display: flex;justify-content: center;align-items: center; margin-top: 30px" >
							<div>
								<span style="font-size: 25px" > <span style="font-size: 30px;" > <?= $inscritos ?> </span> <br> Inscritos </span> <br>
							</div>
							<div>
								<img style="width: 50px; height: 50px; float: right; margin-left: 40px" src="/template/images/isncritos.png" alt="">
							</div>
						</div>

					</div>

				</div>
			</div>
			<div class="col-xl-3 col-md-6 col-12 com-sm-12">
				<div class="image-container">
					<div class="card">
						<div class="bottom-strip" style="display: flex; justify-content: center; align-items: center" > <span style="font-size: 25px" > <a href="/Turma"> Abrir </a> </span> <br> </div>
						<div style="display: flex;justify-content: center;align-items: center; margin-top: 30px" >
							<div>
								<span style="font-size: 25px" > <span style="font-size: 30px;" > <?= $turmas; ?> </span> <br> Turmas</span> <br>
							</div>
							<div>
								<img style="width: 65px; height: 65px; float: right; margin-left: 40px" src="/template/images/training.png" alt="">
							</div>
						</div>

					</div>

				</div>
			</div>
		</div>

		<div class="row">
			<div class="col-md-4">
				<div style="min-height: 345px" class="box box-default">
					<div class="box-header with-border">
					<h3 class="box-title"><i class="fa fa-gift"></i>  Aniversariantes do Mês</h3>
					</div>
					<!-- /.box-header -->
					<div class="box-body">
						<!-- Nav tabs -->
					<ul class="nav nav-tabs nav-fill" role="tablist">
						<li class="nav-item"> <a class="nav-link active" data-toggle="tab" href="#home11" role="tab"><span class="hidden-sm-up"><i class="ion-home"></i></span> <span class="hidden-xs-down">Alunos</span></a> </li>
						<li class="nav-item"> <a class="nav-link" data-toggle="tab" href="#profile11" role="tab"><span class="hidden-sm-up"><i class="ion-person"></i></span> <span class="hidden-xs-down">Profissionais</span></a> </li>
					</ul>
					<!-- Tab panes -->
					<div class="tab-content tabcontent-border">
						<div class="tab-pane active" id="home11" role="tabpanel">
						<div style="min-height: 345px"  class="pad">
							<?php
								foreach ($aniversarios_aluno as $alunos) {
									$hoje = date("d/m");
									$classe = "";
									if ($alunos->DIA === $hoje) {
										$classe = "font-weight: bold;";
									}

									echo '<h6 style="'.$classe.'color: #000; margin-bottom:15px" >'.$alunos->DIA .' - '.$alunos->NOME_ALUNO.' - '.$alunos->NOME_TURMA.'</h6>';
								}
							?>
						</div>
						</div>
						<div style="min-height: 345px" class="tab-pane pad" id="profile11" role="tabpanel">
							<?php
								foreach ($aniversarios_professores as $prof) {
									$hoje = date("d/m");
									$classe = "";
									if ($prof->DIA === $hoje) {
										$classe = "font-weight: bold;";
									}
									
									echo '<h6 style="'.$classe.'color: #000; margin-bottom:15px" >'.$prof->DIA .' - '.$prof->NOME_PROFISSIONAL.'</h6>';
								}
							?>
						</div>
						<div class="tab-pane pad" id="messages11" role="tabpanel">3</div>
						<div class="tab-pane pad" id="info11" role="tabpanel">4</div>
						<div class="tab-pane pad" id="nots11" role="tabpanel">5</div>
					</div>
					</div>
				</div>
			</div>
			<div class="col-md-4">
				<div style="min-height: 345px"  class="box box-default">
					<div class="box-header with-border">
					<h3 class="box-title"> <i class="fa fa-calendar"></i> Próximos eventos</h3>
					</div>
					<!-- /.box-header -->
					<div class="box-body">
						<!-- Nav tabs -->
					<ul class="nav nav-tabs nav-fill" role="tablist">
						<li class="nav-item"> <a class="nav-link active" data-toggle="tab" href="#home11" role="tab"><span class="hidden-sm-up"><i class="ion-home"></i></span> <span class="hidden-xs-down">Eventos</span></a> </li>
					</ul>
					<!-- Tab panes -->
					<div class="tab-content tabcontent-border">
						<div class="tab-pane active" id="home11" role="tabpanel">
						<div style="min-height: 345px"  class="pad">
							<?php
								foreach ($proximos_Eventos as $eventos) {
									$hoje = date("d/m");
									$classe = "";
									$data_evento = date("d/m", strtotime($eventos->DATA));
									if ($data_evento === $hoje) {
										$classe = "font-weight: bold;";
									}

									echo '<h6 style="'.$classe.'color: #000; margin-bottom:15px" >'.inverterData($eventos->DATA) .' - '.$eventos->DESCRICAO_DATA.'</h6>';
								}
							?>
						</div>
						</div>
						<div class="tab-pane pad" id="messages11" role="tabpanel">3</div>
						<div class="tab-pane pad" id="info11" role="tabpanel">4</div>
						<div class="tab-pane pad" id="nots11" role="tabpanel">5</div>
					</div>
					</div>
					<!-- /.box-body -->
				</div>
			</div>

			<div class="col-md-4">
				<div class="box box-default">
					<!-- /.box-header -->
					<div class="box-body">
						<!-- Nav tabs -->
						<div id="calendar"></div>	
						<div class="legenda">
							<div class="legenda-coluna">
								<div class="legenda-item"><span class="cor" style="background-color: #fff2cc;"></span> Período de Rematrículas <br> e Matrículas</div>
								<div class="legenda-item"><span class="cor" style="background-color: #ffd966;"></span> Início do Bimestre</div>
								<div class="legenda-item"><span class="cor" style="background-color: #bf8f00;"></span> Término de Bimestre</div>
								<div class="legenda-item"><span class="cor" style="background-color: #a8d08d;"></span> Férias Escolares</div>
								<div class="legenda-item"><span class="cor" style="background-color: #00b050;"></span> Data comemorativa</div>
							</div>
							<div class="legenda-coluna">
								<div class="legenda-item"><span class="cor" style="background-color: #ed7d31;"></span> Ponto Facultativo</div>
								<div class="legenda-item"><span class="cor" style="background-color: #ff0000;"></span> Feriado</div>
								<div class="legenda-item"><span class="cor" style="background-color: #ffff00;"></span> Planejamento</div>
								<div class="legenda-item"><span class="cor" style="background-color: #5b9bd5;"></span> Sábado Letivo</div>
								<div class="legenda-item"><span class="cor" style="background-color: #acb4f0;"></span> Reajustes de Diários <br> e Relatórios</div>
							</div>
						</div>

					</div>
					<!-- /.box-body -->
				</div>				
			</div>
		</div>

	  <div class="row">
		<div class="col-md-12">
			
		</div>
	  </div>
		
   
      <!-- /.row -->	      
	</section>
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->
   <!-- Modal HTML -->
<div id="eventModal" class="modal fade" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title"></h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <!-- O conteúdo do evento será inserido aqui -->
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
            </div>
        </div>
    </div>
</div>

