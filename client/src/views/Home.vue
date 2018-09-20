<template>
  <div class="home">
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            
          </li>
        </ul>
        <div class="form-inline my-2 my-lg-0">
          <button class="btn btn-success my-2 my-sm-0" type="button" data-toggle="modal" data-target="#addTaskModal"><span class="fas fa-plus"></span> Add Task</button>
        </div>
      </div>
    </nav>

    <!-- Modal -->
    <div class="modal fade" id="addTaskModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Add New Task</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label>Title</label>
              <input type="text" class="form-control" placeholder="Enter task title...">
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary">Add Task</button>
            <button type="button" class="btn btn-link text-muted" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>

    <main role="main" style="padding-top: 100px">

      <div class="container-fluid">
        <!-- Example row of columns -->
        <div class="row">
          <div class="col-md-3">
            <div class="card">
              <div class="card-header bg-primary text-white">
                Pre-Log
              </div>
              <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <nav aria-label="Page navigation example">
                  <ul class="pagination justify-content-center">
                    <li class="page-item">
                      <a class="page-link" href="#">Previous</a>
                    </li>
                    <li class="page-item">
                      <a class="page-link" href="#">Next</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card">
              <div class="card-header bg-danger text-white">
                To-Do
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card">
              <div class="card-header bg-info text-white">
                On-Going
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card">
              <div class="card-header bg-warning text-white">
                Finished
              </div>
            </div>
          </div>
        </div>

        <hr>

      </div> <!-- /container -->

    </main>

    <footer class="container">
      <p>&copy; Company 2017-2018</p>
    </footer>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  components: {
  }
}
</script>
