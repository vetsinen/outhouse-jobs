<section v-for="(items,title) in categories">
  <h5>{{title}}</h5>
<div class="job-line row flex-row flex-nowrap" >
  <div v-for="(item,i) in items" class="job-item col-5">
  <h4>{{item.title}}</h4>
<span>{{item.price}}p.</span>
</div>
</div>
</section>
