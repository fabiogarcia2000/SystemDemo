$(document).ready(function(){
    
    AgregarMenu();
    
    AgregarHeader();

    $('.click').click(function(){
      $('.popup_box').css("display", "block");
    });
    $('.btn1').click(function(){
      $('.popup_box').css("display", "none");
    });
    $('.btn2').click(function(){
      $('.popup_box').css("display", "none");
      alert("Registro Borrado Permanentemente.");
    });
});

function AgregarMenu(){
    var menu = document.getElementById("Menu");
    menu.innerHTML = '<h1 class="visually-hidden">Sidebars examples</h1>'+
    '<a href="/" class="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom">'+
      '<svg class="bi pe-none me-2" width="30" height="24"><use xlink:href="#bootstrap"/></svg>'+
      '<span class="fs-5 fw-semibold">EnigmaPOS</span>'+
    '</a>'+
    '<ul class="list-unstyled ps-0">'+
      '<li class="mb-1">'+
        '<button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">'+
          'Administracion POS'+
        '</button>'+
        '<div class="collapse show" id="home-collapse">'+
          '<ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">'+
            '<li><a href="../forms/sucursal_lista.html" class="link-dark d-inline-flex text-decoration-none rounded">Sucursales</a></li>'+
			'<li><a href="../forms/articulo_lista.html" class="link-dark d-inline-flex text-decoration-none rounded">Articulos</a></li>'+
			'<li><a href="../forms/categoria_listar.html" class="link-dark d-inline-flex text-decoration-none rounded">Categorias</a></li>'+
            '<li><a href="../forms/impuesto_lista.html" class="link-dark d-inline-flex text-decoration-none rounded">Impuestos</a></li>'+
            '<li><a href="../forms/descuento_lista.html" class="link-dark d-inline-flex text-decoration-none rounded">Descuentos</a></li>'+
			'<li><a href="../forms/metodo_pago_lista.html" class="link-dark d-inline-flex text-decoration-none rounded">Metodo de pago</a></li>'+
			'<li><a href="../forms/Modo_pedido_lista.html" class="link-dark d-inline-flex text-decoration-none rounded">Modo Pedido</a></li>'+
			'<li><a href="../forms/permiso-sar.html" class="link-dark d-inline-flex text-decoration-none rounded">Permisos SAR</a></li>'+
			'<li><a href="../forms/POS_lista.html" class="link-dark d-inline-flex text-decoration-none rounded">POS</a></li>'+
			'<li><a href="../forms/Mesas_lista.html" class="link-dark d-inline-flex text-decoration-none rounded">Mesas</a></li>'+
		  '</ul>'+
        '</div>'+
      '</li>'+
      '<li class="mb-1">'+
        '<button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">'+
          'Inventario'+
        '</button>'+
        '<div class="collapse show" id="dashboard-collapse">'+
          '<ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">'+
            '<li><a href="../forms/centro_costo.html" class="link-dark d-inline-flex text-decoration-none rounded">Centro de Costo</a></li>'+
			      '<li><a href="../forms/articulo_lista.html" class="link-dark d-inline-flex text-decoration-none rounded">Aritculos</a></li>'+
            '<li><a href="../forms/lista-materiales.html" class="link-dark d-inline-flex text-decoration-none rounded">Lista de Materiales</a></li>'+
            '<li><a href="../forms/Unidades_medida_lista.html" class="link-dark d-inline-flex text-decoration-none rounded">Unidades de Medida</a></li>'+
            '<li><a href="../forms/ingresar_mercaderia.html" class="link-dark d-inline-flex text-decoration-none rounded">Ingreso de Mercaderia</a></li>'+
		'</ul>'+
        '</div>'+
      '</li>'+
      '<li class="mb-1">'+
        '<button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false">'+
          'Reportes'+
        '</button>'+
        '<div class="collapse show" id="orders-collapse">'+
          '<ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">'+
            '<li><a href="../forms/reporte_venta_resumen.html" class="link-dark d-inline-flex text-decoration-none rounded">Venta Resumen</a></li>'+
		      	'<li><a href="../forms/reporte_venta_cajero.html" class="link-dark d-inline-flex text-decoration-none rounded">Venta Cajero</a></li>'+
            '<li><a href="../forms/reporte_venta_producto.html" class="link-dark d-inline-flex text-decoration-none rounded">Venta por Producto</a></li>'+
            '<li><a href="../forms/reporte_venta_modo_pedido.html" class="link-dark d-inline-flex text-decoration-none rounded">Venta por modo de pedido</a></li>'+
            '<li><a href="../forms/reporte_venta_categoria.html" class="link-dark d-inline-flex text-decoration-none rounded">Venta por categoria</a></li>'+
            '<li><a href="../forms/reporte_compras.html" class="link-dark d-inline-flex text-decoration-none rounded">Compras</a></li>'+
            '<li><a href="../forms/reporte_venta_categoria.html" class="link-dark d-inline-flex text-decoration-none rounded">Inventario por sucursal</a></li>'+
            '<li><a href="../forms/reporte_arqueo_caja.html" class="link-dark d-inline-flex text-decoration-none rounded">Arqueo de Caja</a></li>'+
            '<li><a href="../forms/reporte_desperdicios.html" class="link-dark d-inline-flex text-decoration-none rounded">Reporte de Desperdicios</a></li>'+
          '</ul>'+
        '</div>'+
      '</li>'+
      '<li class="border-top my-3"></li>'+
      '<li class="mb-1">'+
        '<button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="false">'+
          'Cuenta'+
        '</button>'+
        '<div class="collapse show" id="account-collapse">'+
          '<ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">'+
            '<li><a href="#" class="link-dark d-inline-flex text-decoration-none rounded">Perfil</a></li>'+
            '<li><a href="#" class="link-dark d-inline-flex text-decoration-none rounded">Ajustes</a></li>'+
            '<li><a href="login.html" class="link-dark d-inline-flex text-decoration-none rounded">Cerrar Sesion</a></li>'+
          '</ul>'+
        '</div>'+
      '</li>'+
    '</ul>'
  
  

}

function AgregarFooter(){
    var menu = document.getElementById("Pie");
    menu.innerHTML = '<div></div>'
}

function PupUp(){
  $('.click').click(function(){
    $('.popup_box').css("display", "block");
  });
  $('.btn1').click(function(){
    $('.popup_box').css("display", "none");
  });
  $('.btn2').click(function(){
    $('.popup_box').css("display", "none");
    alert("Registro Borrado Permanentemente.");
  });
}

function AgregarHeader(){
  var menu = document.getElementById("Cabecera");
    menu.innerHTML = '<header>'+
    '<nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #e43e3e ;">'+
        '<div class="container-fluid">'+
          '<a class="navbar-brand" href="#">'+
            '<img src="../images/burridogs logo.png" alt="" width="120" height="60" class="d-inline-block align-text-mid">'+
            'Burridogs'+
          '</a>'+
          '<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">'+
            '<span class="navbar-toggler-icon"></span>'+
          '</button>'+
          '<div class="collapse navbar-collapse" id="navbarSupportedContent">'+
            '<ul class="navbar-nav mr-auto">'+
              '<li class="nav-item dropdown">'+
                '<div class="dropdown-menu" aria-labelledby="navbarDropdown">'+
                  '<a class="dropdown-item" href="/ListaMats_Lista.html">Lista Materiales</a>'+
                  '<a class="dropdown-item" href="/Metd_pago_lista.html">Metodo Pago</a>'+
                  '<a class="dropdown-item" href="/Unidades_medida_lista.html">Unidades Medida</a>'+
                '</div>'+
              '</li>'+
            '</ul>'+
          '</div>'+
        '</div>'+
        '</nav>'+
'</header>'
}
