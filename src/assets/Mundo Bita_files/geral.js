$(document).ready(function(){
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|windows (ce|phone)/i.test(navigator.userAgent)) {
        galeria();
    } else {
        parallax();
        carrossel();
        fancy();
    }

    ancoras();
    placeholder();
    
    $(".link-video").click(function(){
        var video = $(this).attr("href");
        
        $("#lista-videos li span").removeClass("ativo");
        $(this).find("span").addClass("ativo");
        
        $("#destaque").attr("src", video);
        $(window).scrollTo("#destaque", 1000, {easing:'linear', axis:'y', queue: false});    
        return false;
    });
    
});

$(window).load(function(){
    $("body, #boasVindas .colEsquerda.mob").addClass("opacidade");


    //$("#logo").delay(500).queue(function(){ $(this).addClass("animar");});     
});

function parallax(){
    $('.parallax').plaxify();
    $.plax.enable({"activityTarget": $('body')});  
}

function galeria(){
    var mySwiper = $('.swiper-container').swiper({
        //Your options here:
        mode:'horizontal',
        loop: true,
        pagination: '.paginacao',
        createPagination: true,
        loop:true,
        grabCursor: true,
        slidesPerView: 1
        //etc..
    });
}

function carrossel(){
    $("#videos").jCarouselLite({
        btnNext: "#proximo",
        btnPrev: "#anterior",
        visible: 4,
        slideExpr: "li",
        circular: true
    });
    
    $('#galeria1').jCarouselLite({
        btnNext: ".next1",
        btnPrev: ".prev1"
    });

    $('#galeria2').jCarouselLite({
        btnNext: ".next2",
        btnPrev: ".prev2"
    });

    $('#galeria3').jCarouselLite({
        btnNext: ".next3",
        btnPrev: ".prev3"
    });

    $('#galeria4').jCarouselLite({
        btnNext: ".next4",
        btnPrev: ".prev4"
    });

    $('#galeria5').jCarouselLite({
        btnNext: ".next5",
        btnPrev: ".prev5"
    });      
        
}

function ancoras(){
    $('#menu').click(function(){
        $('#submenu').toggleClass('ativo');
    });

    $('#logo').click(function(){
        $('section').fadeOut("slow");
        $('#home').fadeIn("slow");
		$('#submenu').removeClass("ativo");
		$('header nav li a').removeClass("ativo");
        $('#aplicativos').show();   
        return false;
    });
 
    $('.linkMundoBita').click(function(){        
        $('#submenu').removeClass("ativo");
        $('header nav li a').removeClass("ativo");
        $(this).addClass("ativo");
        $('#aplicativos').hide();
        $('section').fadeOut("slow");
        $("#targetMain").load("page/mundo-bita.php");   
        $(window).scrollTo("header nav", 1000, {easing:'linear', axis:'y', queue: false});
    });
    $('.linkProducoes').click(function(){
        $('#submenu').removeClass("ativo");
        $('header nav li a').removeClass("ativo");
        $(this).addClass("ativo");
        $('#aplicativos').hide();
        $('section').fadeOut("slow");
        $("#targetMain").load("page/producoes.php");    
        $(window).scrollTo("header nav", 1000, {easing:'linear', axis:'y', queue: false});
    });
    $('.linkDiversao').click(function(){
        $('#submenu').removeClass("ativo");
        $('header nav li a').removeClass("ativo");
        $(this).addClass("ativo");
        $('#aplicativos').hide();
        $('section').fadeOut("slow");
        $("#targetMain").load("page/diversao.php");  
        $(window).scrollTo("header nav", 1000, {easing:'linear', axis:'y', queue: false});
    });
    $('.linkEventos').click(function(){
        $('#submenu').removeClass("ativo");
        $('header nav li a').removeClass("ativo");
        $(this).addClass("ativo");
        $('#aplicativos').hide();
        $('section').fadeOut("slow");
        $("#targetMain").load("page/eventos.php");      
        $(window).scrollTo("header nav", 1000, {easing:'linear', axis:'y', queue: false});
    });
    $('.linkContato').click(function(){
        $('#submenu').removeClass("ativo");
        $('header nav li a').removeClass("ativo");
        $(this).addClass("ativo");
        $('#aplicativos').hide();
        $('section').fadeOut("slow");
        $("#targetMain").load("page/contato.php");      
        $(window).scrollTo("header nav", 1000, {easing:'linear', axis:'y', queue: false});
    });
}

function videos(iframeName, url) {
    var $iframe = $('#' + iframeName);
    if ( $iframe.length ) {   
        $iframe.attr('src',url);   
        return false;
    }
    return true;
}

function fancy(){
    $(".fancy").fancybox();
}

function placeholder(){
    if (/msie/.test(navigator.userAgent.toLowerCase())) {$('input[placeholder], textarea[placeholder]').each(function () {var ph = $(this).attr('placeholder'); $(this).val(ph).focus(function () {if ($(this).val() === ph) {$(this).val(''); } }).blur(function () {if (!$(this).val()) {$(this).val(ph); } }); }); }
}
function limpaForm(){
    $("#formulario").get(0).reset();
}
function tiraEspaco(texto){
    texto+=' ';
    while(texto.indexOf(" ") != -1){
        texto = texto.replace(" ","");
    }
    return texto;
}

function validaContato(){
    nome=$("#nome").val();
    email=$("#email").val();
    mensagem=$("#mensagem").val();

    if(tiraEspaco(nome) == ""){
        alert("Nome inválido.");
        return false;
    }
    if(tiraEspaco(email) != ""){
        if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))){ 
            alert("E-mail inválido.");
            return false;
        } 
    }else{
        alert("E-mail inválido.");
        return false;
    }
    if(tiraEspaco(mensagem) == ""){
        alert("Mensagem inválida.");
        return false;
    }
    campos = 'nome='+encodeURIComponent(nome)+'&email='+encodeURIComponent(email);
    campos = campos +'&mensagem='+encodeURIComponent(mensagem);
    //$('.fancybox-overlay').css('cursor', 'default');
    //$.fancybox.close();
    //$('#enviando').show();
    $('#divHidden').load('envia_contato.php?'+campos);
    return false;
}	