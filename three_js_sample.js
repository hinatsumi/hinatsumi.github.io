function three_js_sample(){
    // �y�[�W�̓ǂݍ��݂�҂�
    window.addEventListener('load', init);

    function init() {

      // �T�C�Y���w��
      const width = 960;
      const height = 540;

      // �����_���[���쐬
      const renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector('#myCanvas')
      });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(width, height);

      // �V�[�����쐬
      const scene = new THREE.Scene();

      // �J�������쐬
      const camera = new THREE.PerspectiveCamera(45, width / height);
      camera.position.set(0, 0, +1000);

      // �����쐬
      const geometry = new THREE.BoxGeometry(400, 400, 400);
      const material = new THREE.MeshNormalMaterial();
      const box = new THREE.Mesh(geometry, material);
      scene.add(box);

      tick();

      // ���t���[�����Ɏ��s����郋�[�v�C�x���g�ł�
      function tick() {
        box.rotation.y += 0.01;
        renderer.render(scene, camera); // �����_�����O

        requestAnimationFrame(tick);
      }
    }
}
