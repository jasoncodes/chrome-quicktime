(function()
{
	
	function onClickCapture(event)
	{
		
		if (event.ctrlKey || event.altKey || event.shiftKey) return;
		if (!event.target || !event.target.tagName || !event.target.tagName.toLowerCase() == 'a') return;
		if (!event.target.href) return;
		if (!event.target.href.match(/^http?:\/\//)) return;
		if (!event.target.href.match(/\.(?:mp[34v]|mov|m4[av])$/i)) return;
		
		var obj = document.createElement('object');
		obj.style.position = 'absolute';
		obj.style.visibility = 'hidden';
		obj.type = 'video/quicktime';
		obj.data = 'data:video/quicktime;base64,\
			AAAAIGZ0eXBxdCAgIAUDAHF0ICAAAAAAAAAAAAAAAAAAAAUjbW9vdgAAAGxtdmhkAAAAAMNzerLDc3qyAAACWAAAAAYAAQAAAQAAAAAAAAAAAA\
			AAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAlF0cmFrAAAAXHRraGQA\
			AAAPw3N6qMNzerIAAAABAAAAAAAAAAYAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAEAAAABAA\
			AAAAAkZWR0cwAAABxlbHN0AAAAAAAAAAEAAAAGAAAAAAABAAAAAAG9bWRpYQAAACBtZGhkAAAAAMNzerLDc3qyAAACWAAAAAYAAAAAAAAAOmhk\
			bHIAAAAAbWhscnZpZGVhcHBsEAAAAAABASkZQXBwbGUgVmlkZW8gTWVkaWEgSGFuZGxlcgAAAVttaW5mAAAAFHZtaGQAAAABAQOAAIAAgAAAAA\
			A5aGRscgAAAABkaGxyYWxpc2FwcGwQAAABAAEBQRhBcHBsZSBBbGlhcyBEYXRhIEhhbmRsZXIAAAAkZGluZgAAABxkcmVmAAAAAAAAAAEAAAAM\
			YWxpcwAAAAEAAADic3RibAAAAH5zdHNkAAAAAAAAAAEAAABuZ2lmIAAAAAAAAAABAAAAAAAAAAAAAAIAAAACAAABAAEASAAAAEgAAAAAAAAAAQ\
			NHSUYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAACAAAABgAAAAAAAAACAAAAAAAAAAAAAABhzdHRzAAAAAAAAAAEAAAABAAAA\
			BgAAABxzdHNjAAAAAAAAAAEAAAABAAAAAQAAAAEAAAAUc3RzegAAAAAAAAAqAAAAAQAAABRzdGNvAAAAAAAAAAEAAAVrAAAADHVkdGEAAAAAAA\
			ACNG1ldGEAAAAgaGRscgAAAAAAAAAAbWR0YQAAAAAAAAAAAAAAAAAAAThrZXlzAAAAAAAAAAYAAAA6bWR0YWNvbS5hcHBsZS5xdWlja3RpbWUu\
			cGxheWVyLm1vdmllLnZpc3VhbC5icmlnaHRuZXNzAAAANW1kdGFjb20uYXBwbGUucXVpY2t0aW1lLnBsYXllci5tb3ZpZS52aXN1YWwuY29sb3\
			IAAAA0bWR0YWNvbS5hcHBsZS5xdWlja3RpbWUucGxheWVyLm1vdmllLnZpc3VhbC50aW50AAAAOG1kdGFjb20uYXBwbGUucXVpY2t0aW1lLnBs\
			YXllci5tb3ZpZS52aXN1YWwuY29udHJhc3QAAAAqbWR0YWNvbS5hcHBsZS5xdWlja3RpbWUucGxheWVyLnZlcnNpb24AAAAjbWR0YWNvbS5hcH\
			BsZS5xdWlja3RpbWUudmVyc2lvbgAAANRpbHN0AAAAHAAAAAEAAAAUZGF0YQAAABcAAAAAAAAAAAAAABwAAAACAAAAFGRhdGEAAAAXAAAAAD+A\
			AAAAAAAcAAAAAwAAABRkYXRhAAAAFwAAAAAAAAAAAAAAHAAAAAQAAAAUZGF0YQAAABcAAAAAP4AAAAAAAB0AAAAFAAAAFWRhdGEAAAABAAAAAD\
			cuMi4xAAAAPwAAAAYAAAA3ZGF0YQAAAAEAAAAANy4yLjEgMHg3MjE4MDAwIChNYWMgT1MgWCwgMTAuNSwgOUE1ODEpAAAAKnVkdGEAAAAMV0xP\
			QwAtABUAAAAJU2VsTwAAAAAJQWxsRgAAAAAAAAAACGZyZWUAAAAId2lkZQAAAEJtZGF0AAAACHdpZGUAAAAAbWRhdEdJRjg5YQEAAQCAAAAAAA\
			AAAAAh+QQBAAAAACwAAAAAAQABAAACAkQBAA=='; // qtbutton.mov
		
		params = {
			target: 'quicktimeplayer',
			postdomevents: 'true',
			href: event.target.href,
			autohref: 'true',
			autostart: 'false',
			controller: 'false',
			cache: 'true',
			spec: 'qt'
		}
		for (name in params)
		{
			var param = document.createElement('param');
			param.name = name;
			param.value = params[name];
			obj.appendChild(param);
		}
		
		document.body.appendChild(obj);
		
		event.preventDefault();
		
	}
	
	window.addEventListener('click', onClickCapture, true);
	
})();
