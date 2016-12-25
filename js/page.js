$(document).ready(function(){
    $('#profil').click(function(event){
        event.preventDefault();
        $.ajax({
            url: 'content/profil.html',
            type: 'GET',
            dataType: 'HTML',
            data: '',
            success: function(data){
                $('#halaman').html(data);
            }
        });
    });
    $('#pendidikan').click(function(event){
        event.preventDefault();
        $.ajax({
            url: 'content/pendidikan.html',
            type: 'GET',
            dataType: 'HTML',
            data: '',
            success: function(data){
                $('#halaman').html(data);
            }
        });
    });
    $('#keahlian').click(function(event){
        event.preventDefault();
        $.ajax({
            url: 'content/keahlian.html',
            type: 'GET',
            dataType: 'HTML',
            data: '',
            success: function(data){
                $('#halaman').html(data);
            }
        });
    });
    $('#magang').click(function(event){
        event.preventDefault();
        $.ajax({
            url: 'content/magang.html',
            type: 'GET',
            dataType: 'HTML',
            data: '',
            success: function(data){
                $('#halaman').html(data);
            }
        });
    });
    $('#project-buat').click(function(event){
        event.preventDefault();
        $.ajax({
            url: 'content/project-buat.html',
            type: 'GET',
            dataType: 'HTML',
            data: '',
            success: function(data){
                $('#halaman').html(data);
            }
        });
    });
    $('#galeri').click(function(event){
        event.preventDefault();
        $.ajax({
            url: 'content/galeri.html',
            type: 'GET',
            dataType: 'HTML',
            data: '',
            success: function(data){
                $('#halaman').html(data);
            }
        });
    });
    $('#kontak').click(function(event){
        event.preventDefault();
        $.ajax({
            url: 'content/kontak.html',
            type: 'GET',
            dataType: 'HTML',
            data: '',
            success: function(data){
                $('#halaman').html(data);
            }
        });
    });
    $('#love').click(function(event){
        event.preventDefault();
        $.ajax({
            url: 'content/mylove.html',
            type: 'GET',
            dataType: 'HTML',
            data: '',
            success: function(data){
                $('#halaman').html(data);
            }
        });
    });
});