# React Three Fiber POC

This is a POC to demonstrate how to use react-three-fiber to create various kind of 3D animations.

POC contains following type of animation demo.

- animating basic properties of object.
- animating object based on events.
- animating object based on scroll
- animating object infinitely.
- animation with 3D models.

---

# 1. Animating basic properties of object.

In this example we will see how we can animate basic properties of object or model like

- x,y,z positions
- x,y,z rotations
- size
- material etc...

In the below example you can use that we have assigned ref to the mesh. We can also attached ref to the some 3D object.

```jsx
<mesh ref={myMesh}>
  <boxGeometry args={[2, 1, 2]} />
  <meshPhongMaterial color="royalblue" />
</mesh>
```

Now we can manipulate property of the mesh. Below I have manipulated rotation of mesh.

```jsx
useFrame(() => {
  myMesh.current?.rotateX(0.02);
  myMesh.current?.rotateZ(0.02);
  myMesh.current?.rotateY(0.01);
});
```

---

# 2. Animating object based on events.

In this example we will see how we can animated based some event like click, mouse enter, mouse leave etc...

just like how we attach ref we will attach event listener to the mesh or 3D object.

```jsx
<mesh
  ref={meshRef}
  onPointerEnter={() => {
    setIsScale(false);
  }}
  onPointerLeave={() => {
    setIsScale(true);
  }}
  onClick={() => {
    setIsScale((p) => !p);
    onColorChange();
  }}
  position={[0, 2, 0]}
>
  <boxGeometry args={[4, 3, 3]} />

  <OrbitControls enableRotate enablePan enableZoom />

  <meshPhongMaterial color={color} />
</mesh>
```

Now we can utilise this updated state by the event listener in useFrame hook.
below is the example...

```jsx
useFrame(() => {
  if (!isScale) return;
  if (!meshRef.current?.position) return;
  if (isScale) {
    meshRef.current.position.x = x + radius * Math.cos(angle);
    meshRef.current.position.z = y + radius * Math.sin(angle);

    setAngle((a) => {
      return (a + Math.PI / 360) % (Math.PI * 2);
    });
  }
});
```

---

# 3. Animating object based on scroll.

---

# 4. Animating object infinitely.

If you want something to animate infinitely what you can do is that when object move out of viewport you can reset its position.

Here I have created array of [number, number, number] to store information of particles.

```jsx
const [parts, setParts] = useState < Array < [number, number, number] >> [];
```

I will reset particle's position once they leave the viewport or I will update particle's next position.

```jsx
useFrame(() => {
  setParts((prev) => {
    return prev.map((partItem) => {
      if (partItem[2] > 20) {
        return [partItem[0], partItem[1], -20];
      }
      return [partItem[0], partItem[1], partItem[2] + 0.2];
    });
  });
});
```

This will create particle to animate infinitely. When particle go outof viewporr their position will be reseted.

---

# 5. Animation with 3D models.

you can use fbx, glb, gltf 3D Models. Here I have used Glb model.

To generate 3D model with typescript component you can use following command(put your model in public folder and execute below command from public folder).

```shell
npx gltfjsx [model-name] -t
```

Above command will generated typed components file from 3D model which you can use directly.

you can animate basic properties of 3D model as mentioned in 1.Animating basic properties of object.

If you have 3D animated model then you can use them and even control them!

Below is what you can control...

- duration of the animation
- play/pause animation
- speed of the animation
- loop animation
- mix two animation
- repeat animation

Every animation have name assigned to it.

To animate 3D object's pre-built animation you can use **useAnimation** hook like below.

```jsx
const { nodes, materials, animations } = useGLTF([model-path]) as GLTFResult;
const { actions } = useAnimations(animations, group);
// group is ref attached to the first group.
```
Now you can use this action object to animate 3D model.

action object contain key-value pair of animation name & animation data.

We can use this different kind of animation data.


