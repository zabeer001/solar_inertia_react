  <!-- ======= Sidebar ======= -->
  <aside id="sidebar" class="sidebar">

      <ul class="sidebar-nav" id="sidebar-nav">

          <li class="nav-heading">Admin Dashboard</li>
          <li class="nav-item">
              <a class="nav-link collapsed" href="/admin/blogs">
                  <i class="fa-solid fa-blog"></i>
                  <span>Blogs</span>
              </a>
          </li>
          <li class="nav-item">
              <a class="nav-link collapsed" href="/admin/categories">
                  <i class="fa-solid fa-list"></i>
                  <span>Categories</span>
              </a>
          </li>
          <li class="nav-item">
              <a class="nav-link collapsed" href="/admin/authors">
                  <i class="fa-solid fa-at"></i>
                  <span>Authors</span>
              </a>
          </li>


          <li class="nav-item">
              <a class="nav-link collapsed" href="{{ route('profile.edit') }}">
                  <i class="bi bi-person"></i>
                  <span>Profile</span>
              </a>
          </li>
          <!-- End Profile Page Nav -->



          {{-- <li class="nav-item">
              <a class="nav-link collapsed" href="pages-contact.html">
                  <i class="bi bi-envelope"></i>
                  <span>Contact</span>
              </a>
          </li> --}}
          <!-- End Contact Page Nav -->



          {{-- <li class="nav-item">
              <a class="nav-link collapsed" href="pages-login.html">
                  <i class="bi bi-box-arrow-in-right"></i>
                  <span>Login</span>
              </a>
          </li> --}}
          <!-- End Login Page Nav -->

          {{-- <li class="nav-item">
              <a class="nav-link collapsed" href="pages-error-404.html">
                  <i class="bi bi-dash-circle"></i>
                  <span>Error 404</span>
              </a>
          </li> --}}
          <!-- End Error 404 Page Nav -->


      </ul>

  </aside><!-- End Sidebar-->
