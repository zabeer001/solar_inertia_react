<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Admin Panel</title>
    <!-- Favicon -->
    <link href="{{ asset('assets/backend/img/favicon.png') }}" rel="icon">

    <link href="{{ asset('assets/backend/img/apple-touch-icon.png') }}" rel="apple-touch-icon">

    <!-- Google Fonts -->
    <link href="https://fonts.gstatic.com" rel="preconnect">
    <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Nunito:300,300i,400,400i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i"
        rel="stylesheet">

    <!-- Vendor CSS Files -->
    <link href="{{ asset('assets/backend/assets/vendor/bootstrap/css/bootstrap.min.css') }}" rel="stylesheet">
    <link href="{{ asset('assets/backend/assets/vendor/bootstrap-icons/bootstrap-icons.css') }}" rel="stylesheet">
    <link href="{{ asset('assets/backend/assets/vendor/boxicons/css/boxicons.min.css') }}" rel="stylesheet">
    <link href="{{ asset('assets/backend/assets/vendor/quill/quill.snow.css') }}" rel="stylesheet">
    <link href="{{ asset('assets/backend/assets/vendor/quill/quill.bubble.css') }}" rel="stylesheet">
    <link href="{{ asset('assets/backend/assets/vendor/remixicon/remixicon.css') }}" rel="stylesheet">
    <link href="{{ asset('assets/backend/assets/vendor/simple-datatables/style.css') }}" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" rel="stylesheet">
    <!-- Select2 CSS -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.13/css/select2.min.css" rel="stylesheet" />

    <!-- Add Summernote CSS and JS -->
    {{-- <link href="https://cdn.jsdelivr.net/npm/summernote@0.9.0/dist/summernote.min.css" rel="stylesheet"> --}}
    {{-- <link href="https://cdn.jsdelivr.net/npm/summernote@0.9.0/dist/summernote-lite.min.css" rel="stylesheet"> --}}
    <link href="{{ asset('assets/backend/assets/vendor/summer/summernote-bs5.css') }}" rel="stylesheet">

    <!-- Main CSS File -->
    <link href="{{ asset('assets/backend/assets/css/style.css') }}" rel="stylesheet">

    <style>
        .toast-success,
        .toast-error {
            position: fixed;
            top: 20px;
            right: 20px;
            color: #fff;
            padding: 15px 20px;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
            font-size: 16px;
            z-index: 2147483647;
            opacity: 0;
            transform: translateY(-20px);
            transition: opacity 0.4s ease, transform 0.4s ease;
        }

        .toast-success {
            background-color: #4CAF50;
            /* Green for success */
        }

        .toast-error {
            background-color: #dc3545;
            /* Red for error */
        }

        .toast-success.show,
        .toast-error.show {
            opacity: 1;
            transform: translateY(0);
        }

    </style>


</head>

<body>
    @if (session('success'))
        <div id="toast-message-success" class="toast-success">
            {{ session('success') }}
        </div>
    @endif

    @if (session('error'))
        <div id="toast-message-error" class="toast-error">
            {{ session('error') }}
        </div>
    @endif



    @include('layouts.backend.navbar')



    @include('layouts.backend.sidebar')


    <main id="main" class="main">

        @yield('content')

    </main>

    @include('layouts.backend.footer')



    <!-- Vendor JS Files -->
    <script src="{{ asset('assets/backend/assets/vendor/apexcharts/apexcharts.min.js') }}"></script>
    <script src="{{ asset('assets/backend/assets/vendor/bootstrap/js/bootstrap.bundle.min.js') }}"></script>
    <script src="{{ asset('assets/backend/assets/vendor/chart.js/chart.umd.js') }}"></script>
    <script src="{{ asset('assets/backend/assets/vendor/echarts/echarts.min.js') }}"></script>
    <script src="{{ asset('assets/backend/assets/vendor/quill/quill.js') }}"></script>
    <script src="{{ asset('assets/backend/assets/vendor/simple-datatables/simple-datatables.js') }}"></script>
    <script src="{{ asset('assets/backend/assets/vendor/tinymce/tinymce.min.js') }}"></script>
    <script src="{{ asset('assets/backend/assets/vendor/php-email-form/validate.js') }}"></script>
    <!-- Select2 JS -->
    <!-- Alternative Select2 CDN -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.13/js/select2.min.js"></script>

    {{-- <script src="https://cdn.jsdelivr.net/npm/summernote@0.9.0/dist/summernote.min.js"></script> --}}
    {{-- <script src="https://cdn.jsdelivr.net/npm/summernote@0.9.0/dist/summernote-lite.min.js"></script> --}}
    <script src="{{ asset('assets/backend/assets/vendor/summer/summernote-bs5.js') }}"></script>


    <!-- Template Main JS File -->
    <script src="{{ asset('assets/backend/assets/js/main.js') }}"></script>

    <script>
        document.addEventListener("DOMContentLoaded", function() {
            const showToast = (id) => {
                const toast = document.getElementById(id);
                if (toast) {
                    toast.classList.add('show');
                    setTimeout(() => {
                        toast.classList.remove('show');
                    }, 5000);
                }
            };

            showToast('toast-message-success');
            showToast('toast-message-error');
        });
    </script>





    @yield('script')
</body>

</html>
