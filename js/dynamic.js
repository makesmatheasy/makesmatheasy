       $(function() {
          var type = /(svg|webgl)/.test(url.type) ? url.type : 'canvas';
          var two = new Two({
            type: Two.Types[type],
            fullscreen:true,
            autostart: true
          }).appendTo(document.body);

          var characters = [];
          var gravity = new Two.Vector(0, 0.66);
          var styles = {
            family: 'proxima-nova, sans-serif',
            size: 50,
            leading: 50,
            weight: 900
          };
          $(window)
            .bind('keydown', function(e) {
              var character = getran(1);
              add(character);
            })
            .bind('touchstart', function() {
              var character=getran(1);
              add(character);
            });
          two
            .bind('update', function() {
              for (var i = 0; i < characters.length; i++) {
                var text = characters[i];
                text.translation.addSelf(text.velocity);
                text.rotation += text.velocity.r;
                text.velocity.addSelf(gravity);
                if (text.velocity.y > 0 && text.translation.y > two.height)  {
                  two.scene.remove(text);
                  characters.splice(i, 1);
                }
              }
            });
          function add(msg) {
            var x = Math.random() * two.width / 2 + two.width / 4;
            var y = two.height * 1.25;
            var text = two.makeText(msg, x, y, styles);
            text.size *= 2;
            text.fill = '#cccac6';
            text.velocity = new Two.Vector();
            text.velocity.x = 10 * (Math.random() - 0.5);
            text.velocity.y = - (20 * Math.random() + 13);
            text.velocity.r = Math.random() * Math.PI / 8;
            characters.push(text);
          }


        });
