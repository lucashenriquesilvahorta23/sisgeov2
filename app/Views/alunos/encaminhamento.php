<style>
    @media print {
        @page {
            size: portrait; /* Para paisagem */
            /* size: portrait;  Para retrato (padrão) */
        }
    }
</style>
<p style="text-align: center;"><strong>ENCAMINHAMENTO</strong></p>

<p align="justify">
Prezado(a) Senhor(a),
<br><br>
    Venho através deste documento encaminhar o(a) aluno(a) <strong><?= $aluno->NOME_ALUNO ?></strong>, 
    nascido(a) em <strong><?= date("d/m/Y", strtotime($aluno->DATA_NASCIMENTO)) ?></strong>, 
    natural de <strong><?= $aluno->CIDADE ?></strong> – <?= $aluno->ESTADO_NATURALIDADE ?>, 
    filho(a) de <strong><?= $aluno->FILIACAO_1 ?></strong><strong><?= $aluno->FILIACAO_2 != "" ? " <span style='font-weight: normal;' >e</span> ".$aluno->FILIACAO_2."," : "," ?></strong>
    estando devidamente matriculado(a) e frequentando esta Instituição de Ensino, cursando a etapa 
    <?php
    switch ($turma->ETAPA) {
        case 'I1':
            echo '<strong>Ed. Infantil I – 4 Anos</strong>';
            break;
        case 'I2':
            echo '<strong>Ed. Infantil II – 5 Anos</strong>';
            break;
        case 'C1':
            echo '<strong>Creche I – 1 Ano</strong>';
            break;
        case 'C2':
            echo '<strong>Creche II – 2 Anos</strong>';
            break;
        case 'C3':
            echo '<strong>Creche III – 3 Anos</strong>';
            break;
        case 'F1':
            echo '<strong>Fundamental I</strong>';
            break;
        case 'F2':
            echo '<strong>Fundamental II</strong>';
            break;
        case 'M1':
            echo '<strong>Médio I</strong>';
            break;
        case 'M2':
            echo '<strong>Médio II</strong>';
            break;
        default:
            echo '<strong>Não informado</strong>';
            break;
    }
    ?>, 
    Turma: <strong><?= trim($turma->NOME_TURMA) ?></strong>, Turno: 
    <?php
    switch ($turma->TIPO_ATENDIMENTO) {
        case 'IN':
            echo '<strong>Integral</strong>';
            break;
        case 'PM':
            echo '<strong>Parcial Matutino</strong>';
            break;
        case 'PV':
            echo '<strong>Parcial Vespertino</strong>';
            break;
        case 'PA':
            echo '<strong>Parcial</strong>';
            break;
        case 'ND':
            echo '<strong>Noturno</strong>';
            break;
        case 'DU':
            echo '<strong>Dupla Jornada</strong>';
            break;
        case 'SE':
            echo '<strong>Semi-Integral</strong>';
            break;
        default:
            echo '<strong>Não informado</strong>';
            break;
    }
    ?>, a este órgão, para consultar o Número de Identificação Social (NIS), ou se necessário, realizar a inscrição do aluno supracitado no CadÚnico.
</p>

<p align="justify">
    Caso seja necessário verificar a autenticidade deste documento, entre em contato com a secretaria da Instituição de Ensino pelo telefone <?= $escola->TELEFONE ?>, estando de posse desta via, informar o Código do documento localizado à direita da parte superior.
</p>

<p align="justify">
    <?= $escola->MUNICIPIO ?> – <?= $aluno->ESTADO_NATURALIDADE ?>, <?= date("d/m/Y") ?>
</p>

<div class="signature">
    <div>
        ____________________________ <br>
        <?= $escola->GESTOR ?> <br>
        CPF: <?= $escola->CPF_GESTOR ?> <br>
        Gestor(a) Escolar
    </div>
</div>
