<template>
  <main>
    <section class="hero is-white is-fullheight">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-vcentered reverse-columns">
            <div class="column is-10-mobile is-10-tablet is-5-desktop is-5-widescreen is-5-fullhd">
              <h1 class="title titled is-1 mb-6">Helping people track all the delicious things they want to eat.</h1>
              <div class="buttons">
                <router-link to="/restaurants" class="button is-primary">See all food</router-link>
                <router-link to="/restaurants?new=true" class="button">Add new food</router-link>
              </div>
            </div>
            <div
              data-aos="fade-right"
              class="column is-10-mobile is-10-tablet is-4-desktop is-7-widescreen is-4-fullhd is-offset-1-fullhd"
            >
              <figure class="image is-square">
                <img src="/images/pexels-andres-ayrton-square.jpg" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style></style>
