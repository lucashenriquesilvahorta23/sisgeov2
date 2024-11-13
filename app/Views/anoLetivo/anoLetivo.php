<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper" style="margin-left: 300px" >
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>
        <i class="fa fa-calendar"></i> Ano letivo
      </h1>
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#"><i class="fa fa-home"></i> Home</a></li>
        <li class="breadcrumb-item"><a href="#">Ano letivo</a></li>
        <li class="breadcrumb-item active">Listagem</li>
      </ol>
    </section>

    <!-- Main content -->
    <section class="content">
        <div class="row">		
            <div class="col-12">         
                <div class="box">
                    <div class="box-header with-border">
                    <h3 class="box-title">Ano letivo</h3>
                    <div class="box-controls pull-right">
                        <!-- <button id="row-remove" class="btn btn-xs btn-danger">Delete selected row</button> -->
                        <a href="/AnoLetivo/Inserir"><button class="btn btn-md btn-info"><i class="fa fa-plus"></i> Novo</button></a>
                    </div>
                    </div>
                    <!-- /.box-header -->
                    <div class="box-body">
                        <div class="table-responsive">
                        <table id="tabela_padrao_datatable" class="table table-bordered table-hover display nowrap margin-top-10 w-p100">
                            <thead>
                                <tr>
                                    <th>Ações</th>
                                    <th>ID</th>
                                    <th>Ano</th>
                                    <th>Inicio</th>
                                    <th>Termino(Previsão)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <?php 
                                    if($resultados != ""){
                                        foreach ($resultados as $resultado) {
                                            echo '<tr>';
                                                echo '	<td align="center">';				
                                                echo '		<a href="/AnoLetivo/Editar/'.base64_encode($resultado->ID_ANO_LETIVO).'" >';
                                                echo '<button class="btn btn-success btn-sm" title="Editar informações"><i class="fa fa-edit "></i></button>';
                                                echo '		</a>';
                                                echo '		<a href="/AnoLetivo/Excluir/'.base64_encode($resultado->ID_ANO_LETIVO).'" onclick="return confirm(\'Deseja continuar?\')">';
                                                echo '<button class="btn btn-warning btn-sm" title="Editar informações"><i class="fa fa-trash "></i></button>';
                                                echo '		</a>';
                                                echo '	</td>';
                                                echo '	<td>'.$resultado->ID_ANO_LETIVO.'</td>';
                                                echo '	<td>'.$resultado->ANO_LETIVO.'</td>';
                                                echo '	<td>'.inverterData($resultado->DATA_INICIAL).'</td>';
                                                echo '	<td>'.inverterData($resultado->DATA_FINAL).'</td>';
                                            echo '</tr>';
                                        }
                                    }
                                ?>
                            </tbody>				  
                        </table>
                        </div>              
                    </div>
                    <!-- /.box-body -->
                </div>
            <!-- /.box -->          
            </div>
            <!-- /.col -->
        </div>
      <!-- /.row -->
    </section>
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->
  <script src="/template/js/escola.js"></script>