export const SkinGenerator = () => {
  return (
    <div>
      <h1>Random skins generator</h1>

      <div class="content">
        <div style={{ display: "flex" }}>
          <button onClick={() => console.log("generateRandomSkin()")}>
            Generate skin
          </button>
          <textarea />
          <button style={{ width: "max-content" }}>Copy skin</button>
        </div>

        <div class="settings">
          <h2>Settings</h2>
          <div class="default-settings">
            <h3>Default settings</h3>
            <div>
              <div>
                <label>
                  Base:
                  <select
                    name="base-default"
                    id="base-default"
                    onChange={() => console.log("setBaseDefault()")}
                  >
                    <option>OFF</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                    <option>13</option>
                    <option>14</option>
                  </select>
                </label>
                <label>
                  Base color:
                  <input
                    type="color"
                    id="base-color-default"
                    onChange={() => console.log("setBaseColorDefault()")}
                  />
                </label>
              </div>
              <div>
                <label>
                  Pattern 1:
                  <select
                    name="pattern-default"
                    id="pattern-default"
                    onChange={() => console.log("setPatternDefault()")}
                  >
                    <option>OFF</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                    <option>13</option>
                    <option>14</option>
                  </select>
                </label>
                <label>
                  Pattern 1 color:
                  <input
                    type="color"
                    id="pattern-color-default"
                    onChange={() => console.log("setPatternColorDefault()")}
                  />
                </label>
              </div>

              <div>
                <label>
                  Pattern 2:
                  <select
                    name="pattern2-default"
                    id="pattern2-default"
                    onChange={() => console.log("setPattern2Default()")}
                  >
                    <option>OFF</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                    <option>13</option>
                    <option>14</option>
                  </select>
                </label>
                <label>
                  Pattern 2 color:
                  <input
                    type="color"
                    id="pattern2-color-default"
                    onChange={() => console.log("setPattern2ColorDefault()")}
                  />
                </label>
              </div>

              <div>
                <label>
                  Effect:
                  <select
                    name="effect-default"
                    id="effect-default"
                    onChange={() => console.log("setEffectDefault()")}
                  >
                    <option>None</option>
                    <option>bubble</option>
                    <option>sparkle</option>
                    <option>heart</option>
                    <option>lightning</option>
                    <option>fire</option>
                    <option>star</option>
                    <option>swirl</option>
                    <option>line</option>
                    <option>squiggle</option>
                  </select>
                </label>
                <label>
                  Effect color:
                  <input
                    type="color"
                    id="effect-color-default"
                    onChange={() => console.log("setEffectColorDefault()")}
                  />
                </label>
              </div>

              <div>
                <label>
                  Glow color 1:
                  <input
                    type="checkbox"
                    onClick={() => console.log("toggleIsGlowColor1Enabled()")}
                  />
                </label>
                <input
                  type="color"
                  id="glow1-color-default"
                  onChange={() => console.log("setGlowColor1Default()")}
                  style="display: none;"
                />
              </div>

              <div>
                <label>
                  Glow color 2:
                  <input
                    type="checkbox"
                    onClick={() => console.log("toggleIsGlowColor2Enabled()")}
                  />
                </label>
                <input
                  type="color"
                  id="glow2-color-default"
                  onChange={() => console.log("setGlowColor2Default()")}
                  style="display: none;"
                />
              </div>
            </div>
          </div>
          <div class="randomization-settings">
            <h3>Randomization</h3>
            <div>
              <label>
                Base:
                <input
                  type="checkbox"
                  onClick={() => console.log("toggleIsBaseRandom()")}
                  checked
                />
              </label>
              <label>
                Base color:
                <input
                  type="checkbox"
                  onClick={() => console.log("toggleIsBaseColorsRandom()")}
                  checked
                />
              </label>
            </div>
            <div>
              <label>
                Pattern 1:
                <input
                  type="checkbox"
                  onClick={() => console.log("toggleIsPattern1Random()")}
                  checked
                />
              </label>
              <label>
                Pattern 1 color:
                <input
                  type="checkbox"
                  onClick={() => console.log("toggleIsPattern1ColorsRandom()")}
                  checked
                />
              </label>
            </div>
            <div>
              <label>
                Pattern 2:
                <input
                  type="checkbox"
                  onClick={() => console.log("toggleIsPattern2Random()")}
                  checked
                />
              </label>
              <label>
                Pattern 2 color:
                <input
                  type="checkbox"
                  onClick={() => console.log("toggleIsPattern2ColorsRandom()")}
                  checked
                />
              </label>
            </div>
            <div>
              <label>
                Effect:
                <input
                  type="checkbox"
                  onClick={() => console.log("toggleIsEffectRandom()")}
                />
              </label>
              <label>
                Effect color:
                <input
                  type="checkbox"
                  onClick={() => console.log("toggleIsEffectColorsRandom()")}
                />
              </label>
            </div>
            <div>
              <label>
                Glow color 1:
                <input
                  type="checkbox"
                  onClick={() => console.log("toggleIsGlowColor1Random()")}
                />
              </label>
              <label>
                Glow color 2:
                <input
                  type="checkbox"
                  onClick={() => console.log("toggleIsGlowColor2Random()")}
                />
              </label>
            </div>
          </div>
        </div>

        <div id="skin-viewer"></div>
      </div>
    </div>
  );
};
