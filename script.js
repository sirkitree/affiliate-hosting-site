function getRecommendation() {
    let traffic = document.getElementById("traffic").value;
    let type = document.getElementById("type").value;
    let tech = document.getElementById("tech").value;

    let recommendedHost = "";

    if (tech === "wordpress") {
        recommendedHost = "Bluehost (Best for WordPress)";
    } else if (traffic === "high" && type === "ecommerce") {
        recommendedHost = "SiteGround (High Performance)";
    } else {
        recommendedHost = "HostGator (Versatile & Affordable)";
    }

    let recommendationDiv = document.getElementById("recommendation");
    recommendationDiv.innerHTML = `<h2>Recommended Hosting: ${recommendedHost}</h2>
                                  <p>Top 3 Options:</p>
                                  <ul class="list-group">
                                      <li class="list-group-item">Bluehost: Great for WordPress, Free Domain</li>
                                      <li class="list-group-item">SiteGround: High Performance, Excellent Support</li>
                                      <li class="list-group-item">HostGator: Affordable, Variety of Plans</li>
                                  </ul>`;
}
