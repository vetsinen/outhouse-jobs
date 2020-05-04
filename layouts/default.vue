<template>
    <div>
        <nav class="row flex-row flex-nowrap fixed-bottom nav-bottom">
            <nuxt-link active-class="active" class="nav-link col" to="/" title="Catalogue">
                <div class="m-auto menu-1"></div>
            </nuxt-link>
            <nuxt-link active-class="active col-4" class="nav-link col" to="/orders" title="Orders">
                <div class="m-auto menu-2"></div>
            </nuxt-link>
            <nuxt-link active-class="active" class="nav-link col" to="/profile" title="Profile">
                <div class="m-auto menu-3"></div>
            </nuxt-link>
        </nav>

        <nuxt/>
    </div>
</template>

<script>
    // <nuxt-link active-class="active" class="nav-link" to="/profile">
</script>

<style>
    *,
    *:before,
    *:after {
        box-sizing: border-box;
        margin: 10px;
    }

    .nav-link {
        text-align: center;
    }

    .menu-1, .menu-2, .menu-3 {
        width: 78px;
        height: 78px;
        background-color: none;
        background-repeat: no-repeat;
        background-size: cover;
    }

    .menu-1 {
        background-image: url('/1.png');
    }

    .menu-2 {
        background-image: url('/2.png');
    }

    .menu-3 {
        background-image: url('/3.png');
    }

    .menu-1:hover {
        background-image: url('/1-active.png');
    }

    .menu-2:hover {
        background-image: url('/2-active.png');
    }

    .menu-3:hover {
        background-image: url('/3-active.png');
    }

    .nav-bottom {
        background: white;
        margin-bottom: 0;
        border-radius: 50px 50px 0 0;
        border-bottom: none;
        box-shadow: 0 -2px 3px 0 rgba(0, 0, 0, .5);
    }
</style>
