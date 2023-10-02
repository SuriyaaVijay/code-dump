<template>
  <div class="tokyo_tm_about">
    <div class="about_image">
      <img src="../assets/img/slider/1.jpg" alt="about" />
    </div>
    <!-- End .about_image -->

    <div class="description">
      <h3 class="name">Adriano Smith &amp; Photographer</h3>
      <div class="description_inner">
        <div class="left">
          <p>
            Hello, I am a creative photographer based in New York and happy to
            travel all over Europe to capture your big day in candid and
            authentic photos. I will create a lasting memory of the people.
          </p>
          <div class="tokyo_tm_button">
            <button class="ib-button" @click="showModal">Read More</button>
          </div>
        </div>
        <!-- End .left -->

        <div class="right">
          <ul>
            <li>
              <p><span>Birthday:</span>01.07.1990</p>
            </li>
            <li>
              <p><span>Age:</span>31</p>
            </li>
            <li>
              <p><span>Address:</span>Ave 11, New York, USA</p>
            </li>
            <li>
              <p>
                <span>Email:</span
                ><a href="mailto:mail@gmail.com">mail@gmail.com</a>
              </p>
            </li>
            <li>
              <p>
                <span>Phone:</span
                ><a href="tel:+770221770505">+77 022 177 05 05</a>
              </p>
            </li>
            <li>
              <p><span>Study:</span>Univercity of Texas</p>
            </li>
            <li>
              <p><span>Freelance:</span>Available</p>
            </li>
          </ul>
          <!-- End ul -->
        </div>
        <!-- End .right -->
      </div>
    </div>

    <!-- Start Modalbox -->
    <transition name="fade">
      <!-- Modal -->
      <div
        :class="{ 'modal-mask': isActive }"
        id="modal"
        @click="closeModal"
        v-if="isVisible"
      >
        <div
          class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-user"
          @click.stop
        >
          <div class="modal-content">
            <div class="tokyo_tm_modalbox_about">
              <div class="close" @click="closeModal">
                <img
                  class="svg"
                  src="../assets/img/svg/cancel.svg"
                  alt="cancel-img"
                />
              </div>
              <!-- End .close -->
              <div class="my_box">
                <div class="left">
                  <div class="about_title">
                    <h3>Photography Skills</h3>
                  </div>
                  <!-- End .abut_title -->
                  <div class="tokyo_progress">
                    <div class="progress_inner">
                      <span
                        ><span class="label">Wedding Photography</span
                        ><span class="number">95%</span></span
                      >
                      <div class="background">
                        <div class="bar">
                          <div class="bar_in" style="width:95%"></div>
                        </div>
                      </div>
                    </div>
                    <!-- End progress_inner -->
                    <div class="progress_inner">
                      <span
                        ><span class="label">Lifestyle Photography</span
                        ><span class="number">80%</span></span
                      >
                      <div class="background">
                        <div class="bar">
                          <div class="bar_in" style="width:80%"></div>
                        </div>
                      </div>
                    </div>
                    <!-- End progress_inner -->
                    <div class="progress_inner">
                      <span
                        ><span class="label">Family Photography</span
                        ><span class="number">90%</span></span
                      >
                      <div class="background">
                        <div class="bar">
                          <div class="bar_in" style="width:90%"></div>
                        </div>
                      </div>
                    </div>
                    <!-- End progress_inner -->
                  </div>
                  <!-- End .tokyo_progress -->
                </div>
                <!-- End .left -->
                <div class="right">
                  <div class="about_title">
                    <h3>Language Skills</h3>
                  </div>
                  <div class="tokyo_progress">
                    <div class="progress_inner">
                      <span
                        ><span class="label">English</span
                        ><span class="number">95%</span></span
                      >
                      <div class="background">
                        <div class="bar">
                          <div class="bar_in" style="width:95%"></div>
                        </div>
                      </div>
                    </div>
                    <div class="progress_inner">
                      <span
                        ><span class="label">Japanese</span
                        ><span class="number">90%</span></span
                      >
                      <div class="background">
                        <div class="bar">
                          <div class="bar_in" style="width:90%"></div>
                        </div>
                      </div>
                    </div>
                    <div class="progress_inner">
                      <span
                        ><span class="label">Arabian</span
                        ><span class="number">85%</span></span
                      >
                      <div class="background">
                        <div class="bar">
                          <div class="bar_in" style="width:85%"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- End .right -->
              </div>
              <div class="counter">
                <div class="about_title">
                  <h3>Fun Facts</h3>
                </div>
                <ul>
                  <li>
                    <div class="list_inner">
                      <h3>777+</h3>
                      <span>Projects Completed</span>
                    </div>
                  </li>
                  <li>
                    <div class="list_inner">
                      <h3>3K</h3>
                      <span>Happy Clients</span>
                    </div>
                  </li>
                  <li>
                    <div class="list_inner">
                      <h3>9K+</h3>
                      <span>Lines of Code</span>
                    </div>
                  </li>
                </ul>
                <!-- End ul -->
              </div>
              <!-- End .counter -->
              <div class="partners">
                <div class="about_title">
                  <h3>Our Partners</h3>
                </div>
                <Brand />
              </div>
              <!-- End .partner -->
            </div>
            <!-- End .tokyo_tm_modalbox_about -->
          </div>
        </div>
      </div>
    </transition>
    <!-- End Modalbox -->
  </div>
</template>

<script>
import Brand from "./Brand";
export default {
  components: {
    Brand,
  },
  data() {
    return {
      isActive: false,
      isVisible: false,
    };
  },
  methods: {
    showModal: function() {
      this.isActive = true;
      this.isVisible = true;
    },
    closeModal: function() {
      this.isActive = false;
      this.isVisible = false;
    },
  },
};
</script>

<style lang="scss"></style>
