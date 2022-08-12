$(document).ready(function(){
    AgregarMenu();
    AgregarFooter();
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
            '<li><a href="#" class="link-dark d-inline-flex text-decoration-none rounded">Sucursales</a></li>'+
			'<li><a href="../forms/articulo_lista.html" class="link-dark d-inline-flex text-decoration-none rounded">Aritculos</a></li>'+
			'<li><a href="#" class="link-dark d-inline-flex text-decoration-none rounded">Categorias</a></li>'+
            '<li><a href="../forms/impuesto_lista.html" class="link-dark d-inline-flex text-decoration-none rounded">Impuestos</a></li>'+
            '<li><a href="../forms/descuento_lista.html" class="link-dark d-inline-flex text-decoration-none rounded">Descuentos</a></li>'+
			'<li><a href="#" class="link-dark d-inline-flex text-decoration-none rounded">Metodo de pago</a></li>'+
			'<li><a href="#" class="link-dark d-inline-flex text-decoration-none rounded">Modo Pedido</a></li>'+
			'<li><a href="#" class="link-dark d-inline-flex text-decoration-none rounded">Permisos SAR</a></li>'+
			'<li><a href="#" class="link-dark d-inline-flex text-decoration-none rounded">POS</a></li>'+
			'<li><a href="#" class="link-dark d-inline-flex text-decoration-none rounded">Mesas</a></li>'+
		  '</ul>'+
        '</div>'+
      '</li>'+
      '<li class="mb-1">'+
        '<button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">'+
          'Inventario'+
        '</button>'+
        '<div class="collapse" id="dashboard-collapse">'+
          '<ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">'+
            '<li><a href="#" class="link-dark d-inline-flex text-decoration-none rounded">Centro de Costo</a></li>'+
			'<li><a href="#" class="link-dark d-inline-flex text-decoration-none rounded">Aritculos</a></li>'+
            '<li><a href="#" class="link-dark d-inline-flex text-decoration-none rounded">Lista de Materiales</a></li>'+
            '<li><a href="#" class="link-dark d-inline-flex text-decoration-none rounded">Unidades de Medida</a></li>'+
		'</ul>'+
        '</div>'+
      '</li>'+
      '<li class="mb-1">'+
        '<button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false">'+
          'Reportes'+
        '</button>'+
        '<div class="collapse" id="orders-collapse">'+
          '<ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">'+
            '<li><a href="#" class="link-dark d-inline-flex text-decoration-none rounded">Venta Resumen</a></li>'+
			'<li><a href="#" class="link-dark d-inline-flex text-decoration-none rounded">Venta Cajero</a></li>'+
            '<li><a href="#" class="link-dark d-inline-flex text-decoration-none rounded">Venta por Producto</a></li>'+
            '<li><a href="#" class="link-dark d-inline-flex text-decoration-none rounded">Venta por modo de pedido</a></li>'+
            '<li><a href="#" class="link-dark d-inline-flex text-decoration-none rounded">Venta por categoria</a></li>'+
          '</ul>'+
        '</div>'+
      '</li>'+
      '<li class="border-top my-3"></li>'+
      '<li class="mb-1">'+
        '<button class="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed" data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="false">'+
          'Cuenta'+
        '</button>'+
        '<div class="collapse" id="account-collapse">'+
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