(function(dust){dust.register("simple-0",body_0);function body_0(chk,ctx){return chk.w("Hello ").f(ctx.get(["name"], false),ctx,"h").w("! <strong>You have ").f(ctx.get(["messageCount"], false),ctx,"h").w(" messages! ").f(ctx.get(["colors"], false),ctx,"h");}body_0.__dustBody=!0;return body_0}(dust));