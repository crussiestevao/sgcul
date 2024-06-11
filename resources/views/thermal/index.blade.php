<!DOCTYPE html>
<html>

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta tittle="Requisicao" />
    <style type="text/css">
        @font-face {
            font-family: 'merchant_copy_doublesizeRg';
            font-weight: normal;
            font-style: normal;
        }

        .page-break {
            page-break-after: always;
        }
    </style>
    <style type="text/css">
        * {
            padding: 0px;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif font-family: 'merchant_copy_doublesizeRg';
        }


        body {
            font-size: 14px;
        }

        table {

            width: 100%;
            text-align: center;
            padding: 0px;
            border-radius: 5px;
        }

        table tr {
            border: 1px solid #e5e7eb;
        }

        .box {
            border-left: 2px solid #e5e7eb;
            border-right: 2px solid #e5e7eb;
            border-bottom: 2px solid #e5e7eb;
            border-top: 1px solid #e5e7eb;
            border-radius: 5px;
            padding: 4px;
        }


        table tfoot td {
            /* border-left: 2px solid; */
            border-top: 1px solid #e5e7eb;
        }

        table tbody tr td {
            border-left: 2px solid #e5e7eb;
            border-right: 2px solid #e5e7eb;
            border-bottom: 2px solid #e5e7eb;
            border-top: 1px solid #e5e7eb;

        }

        .title {
            font-weight: 'bold';
            font-size: 12px
        }

        ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        li {
            display: inline-block;
            margin-right: 10px;
            /* Adjust the margin as needed */
        }
    </style>
</head>

@php
    $user = request()->user();
@endphp

<body>
    <p>
    <div style="margin-bottom: 10px; text-align:center">
        <img src="{{ $user->appLogo() }}" width="100px" height="80px" style="object-fit: scale-down;"><br>
        <b style="font-size: 18px">Universidade Licungo</b><br>
        <b style="font-size: 15px">Sistema de Gestão de Combustivel</b><br>
        <b style="font-size: 14px">Requisição N° {{ $order->order }}</b>
    </div>
    </p>


    <div style="margin-bottom: 80px; margin-top: 40px">

        <div style="width: 33%; float: left; text-align: left" class="box">
            <ul>
                <li> <b>@lang('NR'): </b>
                    {{ $order->order }}</li>
                <li> <b>@lang('Data de emissão'): </b>
                    {{ $order->created_at->format('d/m/y h:i') }}</li>
                <li>
                    <b>@lang('Matricula'): </b>
                    {{ $order->registration }}
                </li>
                <li>
                    <b>@lang('Motorista'): </b>
                    {{ $order->driver }}
                </li>
            </ul>

        </div>


        <div style="width: 33%; float: right; text-align: right" class="box">

            <ul>
                <li> <b>@lang('Para'): </b></li>
                
                <li> <b>@lang('Estação de serviço '): </b>
                    {{ $order->station->name }}</li>
                <li>
                    <b>@lang('Endereço'): </b>
                    {{ $order->station->address }} Horas
                </li>
            </ul>

        </div>
    </div>


    <div style="margin-top: 20px; margin-bottom: 10px">
        <table>
            <thead>
                <tr style="background-color:#172554; color:white; padding:10px">
                    <th>@lang('#')</th>
                    <th>@lang('Produto')</th>
                    <th>@lang('Preço')</th>
                    <th>@lang('Quantidade')</th>
                </tr>
            </thead>
            <tbody>
                @foreach ($order->items as $item)
                    <tr>
                        <td>{{ $item->code }}</td>
                        <td>{{ $item->name }}</td>
                        <td>{{ $item->price }}</td>
                        <td>{{ $item->quantity }}</td>
                    </tr>
                @endforeach
            </tbody>
        </table>
        <div style=" float: right;">
            <b>@lang('Total'): </b>
            <span style="margin-right: 25px; font-weight:700">{{ number_format($order->amount, 2) }} Mzn</span>
        </div>
        <p style="margin-top: 60px">@lang('Assinatura'): @lang('____________________________')</p>
    </div>



    <footer style="padding: 1rem; text-align: center; position: fixed; bottom: 0; width: 100%;">
        <div style=" float: left;">
            Processado por computador
        </div>
        <div style="float: right;">
            <span style="margin-right: 15px">{{ config('app.name') }} v1.0 Experimental</span>
        </div>
    </footer>

</body>
<html>
