const leftDrawerOpen = Vue.ref(false)
const rightDrawerOpen = Vue.ref(false)
const adclient = Vue.ref('ca-pub-XXXXXXXXXX')
const darkMode = Vue.ref(Quasar.LocalStorage.getItem("darkMode") || !1);
const app = Vue.createApp({
    setup() {
      Quasar.Dark.set(darkMode.value)
        return {
            leftDrawerOpen,rightDrawerOpen,
            toggleLeftDrawer () {
                leftDrawerOpen.value = !leftDrawerOpen.value
            },
            toggleRightDrawer () {
                rightDrawerOpen.value = !rightDrawerOpen.value
            },
            darkMode: darkMode,
            toggleDark: function(){
              darkMode.value = !darkMode.value;
              Quasar.Dark.set(darkMode.value);
              Quasar.LocalStorage.set("darkMode", darkMode.value)
            },
            modeLight: function() {
              darkMode.value = !1;
              Quasar.Dark.set(!1);
              Quasar.LocalStorage.set("darkMode",!1)
            },
            modeDark: function() {
              darkMode.value = !0;
              Quasar.Dark.set(!0);
              Quasar.LocalStorage.set("darkMode", !0)
            }
        }
    },
    template:`
    <q-layout view="hHh LpR fFf">
    <q-header bordered :class="$q.dark.isActive ? 'bg-dark text-white' : 'bg-white text-dark'">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" class="lt-md" aria-label="Menu"></q-btn>
        <q-btn flat no-caps no-wrap stretch href="/" aria-label="Go to Homepage">
          <q-avatar size="42px">
            <img src="/icons/icon.svg" alt="Logo">
          </q-avatar>
        </q-btn>
        <q-space/>
        <q-btn dense round :text-color="$q.dark.isActive ? 'yellow' : 'white'" :color="$q.dark.isActive ? 'light_mode' : 'black'" :icon="$q.dark.isActive ? 'light_mode' : 'dark_mode'" @click="toggleDark" aria-label="Toggle Dark Mode"></q-btn>
        
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <q-scroll-area class="fit">
        <q-list padding :class="$q.dark.isActive ? '' : 'text-grey-8'">
          <q-item href="/" clickable>
            <q-item-section avatar>
              <q-icon name="home"></q-icon>
            </q-item-section>
            <q-item-section>
              <q-item-label>Home</q-item-label>
            </q-item-section>
          </q-item>
          <q-expansion-item expand-separator label="Management" header-class="text-weight-bold" >
              <q-item :inset-level="1" dense href="/interest/management/" clickable>
                <q-item-section>
                  <q-item-label>All</q-item-label>
                </q-item-section>
              </q-item>
              <q-item :inset-level="1" dense href="/channel/modern-management-techniques/" clickable>
                <q-item-section>
                  <q-item-label>Modern Management Techniques</q-item-label>
                </q-item-section>
              </q-item>
              <q-item :inset-level="1" dense href="/channel/business-strategy/" clickable>
                <q-item-section>
                  <q-item-label>Business Strategy</q-item-label>
                </q-item-section>
              </q-item>
              <q-item :inset-level="1" dense href="/channel/team-management/" clickable>
                <q-item-section>
                  <q-item-label>Team Management</q-item-label>
                </q-item-section>
              </q-item>
              <q-item :inset-level="1" dense href="/channel/business-digitalization/" clickable>
                <q-item-section>
                  <q-item-label>Digitalization</q-item-label>
                </q-item-section>
              </q-item>
              <q-item :inset-level="1" dense href="/channel/world-business-trends/" clickable>
                <q-item-section>
                  <q-item-label>World Busines Trends</q-item-label>
                </q-item-section>
              </q-item>
              <q-item :inset-level="1" dense href="/channel/ratings/" clickable>
                <q-item-section>
                  <q-item-label>Ratings</q-item-label>
                </q-item-section>
              </q-item>
          </q-expansion-item>
          <q-expansion-item expand-separator label="Self Development" header-class="text-weight-bold" >
              <q-item :inset-level="1" dense href="/interest/self-development/" clickable>
                <q-item-section>
                  <q-item-label>All</q-item-label>
                </q-item-section>
              </q-item>
              <q-item :inset-level="1" dense href="/channel/career/" clickable>
                <q-item-section>
                  <q-item-label>Career</q-item-label>
                </q-item-section>
              </q-item>
              <q-item :inset-level="1" dense href="/channel/flexible-skills/" clickable>
                <q-item-section>
                  <q-item-label>Flexible Skills</q-item-label>
                </q-item-section>
              </q-item>
              <q-item :inset-level="1" dense href="/channel/business-guru/" clickable>
                <q-item-section>
                  <q-item-label>Business Guru</q-item-label>
                </q-item-section>
              </q-item>
              <q-item :inset-level="1" dense href="/channel/professional-skills/" clickable>
                <q-item-section>
                  <q-item-label>Professional Skills</q-item-label>
                </q-item-section>
              </q-item>
              <q-item :inset-level="1" dense href="/channel/business-education/" clickable>
                <q-item-section>
                  <q-item-label>Business Education</q-item-label>
                </q-item-section>
              </q-item>
          </q-expansion-item>
          <q-expansion-item expand-separator label="Investments" header-class="text-weight-bold" >
              <q-item :inset-level="1" dense href="/interest/investments/" clickable>
                <q-item-section>
                  <q-item-label>All</q-item-label>
                </q-item-section>
              </q-item>
              <q-item :inset-level="1" dense href="/channel/venture-industry-and-startups/" clickable>
                <q-item-section>
                  <q-item-label>Venture Industry and Startups</q-item-label>
                </q-item-section>
              </q-item>
              <q-item :inset-level="1" dense href="/channel/franchises/" clickable>
                <q-item-section>
                  <q-item-label>Franchises</q-item-label>
                </q-item-section>
              </q-item>
              <q-item :inset-level="1" dense href="/channel/personal-finance/" clickable>
                <q-item-section>
                  <q-item-label>Personal Finance</q-item-label>
                </q-item-section>
              </q-item>
              <q-item :inset-level="1" dense href="/channel/shares/" clickable>
                <q-item-section>
                  <q-item-label>Shares</q-item-label>
                </q-item-section>
              </q-item>
              <q-item :inset-level="1" dense href="/channel/bonds/" clickable>
                <q-item-section>
                  <q-item-label>Bonds</q-item-label>
                </q-item-section>
              </q-item>
              <q-item :inset-level="1" dense href="/channel/economics/" clickable>
                <q-item-section>
                  <q-item-label>Economics</q-item-label>
                </q-item-section>
              </q-item>
              <q-item :inset-level="1" dense href="/channel/crypto/" clickable>
                <q-item-section>
                  <q-item-label>Crypto</q-item-label>
                </q-item-section>
              </q-item>
              <q-item :inset-level="1" dense href="/channel/deposits/" clickable>
                <q-item-section>
                  <q-item-label>Deposits</q-item-label>
                </q-item-section>
              </q-item>
              <q-item :inset-level="1" dense href="/channel/currency/" clickable>
                <q-item-section>
                  <q-item-label>Currency</q-item-label>
                </q-item-section>
              </q-item>
          </q-expansion-item>
          <q-expansion-item expand-separator label="Health" header-class="text-weight-bold" >
              <q-item :inset-level="1" dense href="/interest/health/" clickable>
                <q-item-section>
                  <q-item-label>All</q-item-label>
                </q-item-section>
              </q-item>
              <q-item :inset-level="1" dense href="/channel/mindfulness/" clickable>
                <q-item-section>
                  <q-item-label>Mindfulness</q-item-label>
                </q-item-section>
              </q-item>
              <q-item :inset-level="1" dense href="/channel/healthy-lifestyle/" clickable>
                <q-item-section>
                  <q-item-label>Healthy Lifestyle</q-item-label>
                </q-item-section>
              </q-item>
              <q-item :inset-level="1" dense href="/channel/medicine/" clickable>
                <q-item-section>
                  <q-item-label>Medicine</q-item-label>
                </q-item-section>
              </q-item>
              <q-item :inset-level="1" dense href="/channel/nutrition/" clickable>
                <q-item-section>
                  <q-item-label>Nutrition</q-item-label>
                </q-item-section>
              </q-item>
              <q-item :inset-level="1" dense href="/channel/brain/" clickable>
                <q-item-section>
                  <q-item-label>Brain</q-item-label>
                </q-item-section>
              </q-item>
              <q-item :inset-level="1" dense href="/channel/parenthood/" clickable>
                <q-item-section>
                  <q-item-label>Parenthood</q-item-label>
                </q-item-section>
              </q-item>
          </q-expansion-item>
          <q-expansion-item expand-separator label="HR" header-class="text-weight-bold" >
              <q-item :inset-level="1" dense href="/interest/hr/" clickable>
                <q-item-section>
                  <q-item-label>All</q-item-label>
                </q-item-section>
              </q-item>
              <q-item :inset-level="1" dense href="/channel/career/" clickable>
                <q-item-section>
                  <q-item-label>Career</q-item-label>
                </q-item-section>
              </q-item>
              <q-item :inset-level="1" dense href="/channel/team-management/" clickable>
                <q-item-section>
                  <q-item-label>Team Management</q-item-label>
                </q-item-section>
              </q-item>
              <q-item :inset-level="1" dense href="/channel/recruitment/" clickable>
                <q-item-section>
                  <q-item-label>Recruitment</q-item-label>
                </q-item-section>
              </q-item>
              <q-item :inset-level="1" dense href="/channel/corporate-training/" clickable>
                <q-item-section>
                  <q-item-label>Corporate Training</q-item-label>
                </q-item-section>
              </q-item>
              <q-item :inset-level="1" dense href="/channel/corporate-culture/" clickable>
                <q-item-section>
                  <q-item-label>Corporate Culture</q-item-label>
                </q-item-section>
              </q-item>
          </q-expansion-item>
          <q-expansion-item expand-separator label="Finance" header-class="text-weight-bold" >
            <q-item :inset-level="1" dense href="/interest/finance/" clickable>
              <q-item-section>
                <q-item-label>All</q-item-label>
              </q-item-section>
            </q-item>
            <q-item :inset-level="1" dense href="/channel/state-regulation/" clickable>
              <q-item-section>
                <q-item-label>State Regulation</q-item-label>
              </q-item-section>
            </q-item>
            <q-item :inset-level="1" dense href="/channel/financial-strategy/" clickable>
              <q-item-section>
                <q-item-label>Financial Strategy</q-item-label>
              </q-item-section>
            </q-item>
            <q-item :inset-level="1" dense href="/channel/reporting-and-audit/" clickable>
              <q-item-section>
                <q-item-label>Reporting and Audit</q-item-label>
              </q-item-section>
            </q-item>
            <q-item :inset-level="1" dense href="/channel/small-and-medium-business/" clickable>
              <q-item-section>
                <q-item-label>Small and Medium Business</q-item-label>
              </q-item-section>
            </q-item>
            <q-item :inset-level="1" dense href="/channel/personal-finance/" clickable>
              <q-item-section>
                <q-item-label>Personal Finance</q-item-label>
              </q-item-section>
            </q-item>
          </q-expansion-item>
          <q-expansion-item expand-separator label="Sales" header-class="text-weight-bold" >
            <q-item :inset-level="1" dense href="/interest/sales/" clickable>
              <q-item-section>
                <q-item-label>All</q-item-label>
              </q-item-section>
            </q-item>
            <q-item :inset-level="1" dense href="/channel/b2b-sales/" clickable>
              <q-item-section>
                <q-item-label>B2B Sales</q-item-label>
              </q-item-section>
            </q-item>
            <q-item :inset-level="1" dense href="/channel/fea/" clickable>
              <q-item-section>
                <q-item-label>Foreign Economic Activity</q-item-label>
              </q-item-section>
            </q-item>
            <q-item :inset-level="1" dense href="/channel/online-sales/" clickable>
              <q-item-section>
                <q-item-label>Online Sales</q-item-label>
              </q-item-section>
            </q-item>
          </q-expansion-item>
          <q-expansion-item expand-separator label="Logistics" header-class="text-weight-bold" >
            <q-item :inset-level="1" dense href="/interest/logistics/" clickable>
              <q-item-section>
                <q-item-label>All</q-item-label>
              </q-item-section>
            </q-item>
            <q-item :inset-level="1" dense href="/channel/fea/" clickable>
              <q-item-section>
                <q-item-label>Foreign Economic Activity</q-item-label>
              </q-item-section>
            </q-item>
            <q-item :inset-level="1" dense href="/channel/warehouse-and-cargo/" clickable>
              <q-item-section>
                <q-item-label>Warehouse and Cargo</q-item-label>
              </q-item-section>
            </q-item>
            <q-item :inset-level="1" dense href="/channel/delivery/" clickable>
              <q-item-section>
                <q-item-label>Delivery</q-item-label>
              </q-item-section>
            </q-item>
            <q-item :inset-level="1" dense href="/channel/supply-chains/" clickable>
              <q-item-section>
                <q-item-label>Supply Chains</q-item-label>
              </q-item-section>
            </q-item>
          </q-expansion-item>
          <q-expansion-item expand-separator label="Marketing and Advertising" header-class="text-weight-bold" >
            <q-item :inset-level="1" dense href="/interest/marketing-and-advertising/" clickable>
              <q-item-section>
                <q-item-label>All</q-item-label>
              </q-item-section>
            </q-item>
            <q-item :inset-level="1" dense href="/channel/strategic-marketing/" clickable>
              <q-item-section>
                <q-item-label>Strategic Marketing</q-item-label>
              </q-item-section>
            </q-item>
            <q-item :inset-level="1" dense href="/channel/internet-marketing/" clickable>
              <q-item-section>
                <q-item-label>Internet Marketing</q-item-label>
              </q-item-section>
            </q-item>
            <q-item :inset-level="1" dense href="/channel/b2b-marketing/" clickable>
              <q-item-section>
                <q-item-label>B2B Marketing</q-item-label>
              </q-item-section>
            </q-item>
            <q-item :inset-level="1" dense href="/channel/branding/" clickable>
              <q-item-section>
                <q-item-label>Branding</q-item-label>
              </q-item-section>
            </q-item>
            <q-item :inset-level="1" dense href="/channel/world-business-trends/" clickable>
              <q-item-section>
                <q-item-label>World Business Trends</q-item-label>
              </q-item-section>
            </q-item>
            <q-item :inset-level="1" dense href="/channel/pr-and-reputation/" clickable>
              <q-item-section>
                <q-item-label>PR and Reputation</q-item-label>
              </q-item-section>
            </q-item>
            <q-item :inset-level="1" dense href="/channel/consumer-behavior/" clickable>
              <q-item-section>
                <q-item-label>Consumer Behavior</q-item-label>
              </q-item-section>
            </q-item>
          </q-expansion-item>
          <div class="q-mt-md non-selectable">
                <p class="q-mb-none text-caption q-px-md">R-Insight. All Rights Reserved.</p>
                <div class="flex flex-center q-gutter-xs">
                  <a :class="$q.dark.isActive ? 'q-link text-caption text-white' : 'q-link text-caption text-grey-8'" href="/privacy/" aria-label="Privacy">Privacy</a>
                  <span> · </span>
                  <a :class="$q.dark.isActive ? 'q-link text-caption text-white' : 'q-link text-caption text-grey-8'" href="/terms/" aria-label="Terms">Terms</a>
                  <span> · </span>
                  <a :class="$q.dark.isActive ? 'q-link text-caption text-white' : 'q-link text-caption text-grey-8'" href="/cookie/" aria-label="Cookie">Cookie</a>
                  <span> · </span>
                  <a :class="$q.dark.isActive ? 'q-link text-caption text-white' : 'q-link text-caption text-grey-8'" href="/code-of-ethics/" aria-label="Ethics">Ethics</a>
                </div>
              </div>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-drawer show-if-above v-model="rightDrawerOpen" side="right" bordered>
      
    </q-drawer>

    <q-page-container>
      <page-component></page-component>
    </q-page-container>

    <q-footer class="bg-transparent text-dark">
        <div class="text-center"></div>
    </q-footer>
  </q-layout>
    `
})
app.component('page-component',{
  methods:{
    copy(item){
      Quasar.copyToClipboard(item).then(() => {
        Quasar.Notify.create({
          message: 'Copied to clipboard',
          position: 'bottom-left',
          timeout: 1500,
          progress: true
        })
      })
      .catch(() => {
        // fail
      })    
    },
    open(item){
      Quasar.openURL(item)
    }
  },
  template:'#content'
})
app.component('ads',{
    setup(){
        return {
            slotID: ["159357","268469","654789"],
            adclient,
            visibility(isVisible){
                // (adsbygoogle = window.adsbygoogle || []).push({});
            }
        }
    },
    computed:{
        randomAdSlot(){
            const index = Math.floor(Math.random() * (this.slotID.length))
            const randomAdSlot = this.slotID[index];
            return randomAdSlot;
        }
    },
    template:`
<q-intersection once :threshold="1" @visibility="visibility">
<div class="qpage-nopadding text-center">
<ins class="adsbygoogle" :data-ad-client="adclient" :data-ad-slot="randomAdSlot"></ins>
</div></q-intersection>
`})
app.use(Quasar)
app.mount('#q-app')
