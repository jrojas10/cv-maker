import React, { Component } from 'react'


class Footer extends Component {
    render() {
        return (
            <div class="container">
                <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                    <div class="col-md-4 d-flex align-items-center">
                        <a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                            <svg class="bi" width="30" height="24"></svg>
                        </a>
                        <span class="text-muted">© 2021 Juan Rojas</span>
                    </div>
                </footer>
            </div>
        )

    }
}
export default Footer