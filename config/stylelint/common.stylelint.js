/* eslint-disable no-magic-numbers */
module.exports = {
  extends: [ 'stylelint-config-standard-scss' ],
  rules: {
    'alpha-value-notation': 'number',
    'at-rule-disallowed-list': null,
    'at-rule-empty-line-before': [
      'always',
      {
        except: [
          'blockless-after-same-name-blockless',
          'first-nested'
        ],
        ignore: [ 'after-comment' ]
      }
    ],
    'at-rule-name-case': 'lower',
    'at-rule-name-newline-after': 'always-multi-line',
    'at-rule-name-space-after': 'always-single-line',
    'at-rule-no-unknown': null,
    'at-rule-no-vendor-prefix': true,
    'at-rule-semicolon-newline-after': 'always',
    'at-rule-semicolon-space-before': 'never',
    'at-rule-allowed-list': null,
    'scss/at-extend-no-missing-placeholder': null,
    'scss/at-import-no-partial-leading-underscore': null,
    'block-closing-brace-empty-line-before': 'never',
    'block-closing-brace-newline-after': 'always',
    'block-closing-brace-newline-before': 'always-multi-line',
    'block-closing-brace-space-after': null,
    'block-closing-brace-space-before': 'always-single-line',
    'block-no-empty': true,
    'block-opening-brace-newline-after': 'always-multi-line',
    'block-opening-brace-newline-before': 'never-single-line',
    'block-opening-brace-space-after': 'always-single-line',
    'block-opening-brace-space-before': 'always',
    'color-hex-case': 'lower',
    'color-hex-length': 'short',
    'color-named': null,
    'color-no-hex': null,
    'color-no-invalid-hex': true,
    'color-function-notation': 'legacy',
    'comment-empty-line-before': [
      'always',
      {
        except: [ 'first-nested' ],
        ignore: [ 'stylelint-commands' ]
      }
    ],
    'comment-no-empty': true,
    'comment-whitespace-inside': 'always',
    'comment-word-disallowed-list': null,
    'custom-media-pattern': null,
    'custom-property-pattern': '.+',
    'custom-property-empty-line-before': [
      'always',
      {
        except: [
          'after-custom-property',
          'first-nested'
        ],
        ignore: [
          'after-comment',
          'inside-single-line-block'
        ]
      }
    ],
    'declaration-bang-space-after': 'never',
    'declaration-bang-space-before': 'always',
    'declaration-block-no-duplicate-properties': [
      true,
      {
        ignore: [ 'consecutive-duplicates-with-different-values' ]
      }
    ],
    'declaration-block-no-redundant-longhand-properties': true,
    'declaration-block-no-shorthand-property-overrides': true,
    'declaration-block-semicolon-newline-after': 'always-multi-line',
    'declaration-block-semicolon-newline-before': 'never-multi-line',
    'declaration-block-semicolon-space-after': 'always-single-line',
    'declaration-block-semicolon-space-before': 'never',
    'declaration-block-single-line-max-declarations': 1,
    'declaration-block-trailing-semicolon': 'always',
    'declaration-colon-newline-after': 'always-multi-line',
    'declaration-colon-space-after': 'always-single-line',
    'declaration-colon-space-before': 'never',
    'declaration-empty-line-before': [
      'always',
      {
        except: [
          'after-declaration',
          'first-nested'
        ],
        ignore: [
          'after-comment',
          'inside-single-line-block'
        ]
      }
    ],
    'declaration-no-important': null,
    'declaration-property-unit-disallowed-list': null,
    'declaration-property-unit-allowed-list': null,
    'declaration-property-value-disallowed-list': null,
    'declaration-property-value-allowed-list': null,
    'font-family-name-quotes': 'always-where-recommended',
    'font-family-no-duplicate-names': true,
    'font-family-no-missing-generic-family-keyword': true,
    'font-weight-notation': [
      'numeric',
      {
        ignore: [ 'relative' ]
      }
    ],
    'function-disallowed-list': null,
    'function-calc-no-unspaced-operator': true,
    'function-comma-newline-before': 'never-multi-line',
    'function-comma-newline-after': 'always-multi-line',
    'function-comma-space-after': 'always-single-line',
    'function-comma-space-before': 'never',
    'function-linear-gradient-no-nonstandard-direction': true,
    'function-max-empty-lines': 0,
    'function-name-case': 'lower',
    'function-parentheses-newline-inside': 'always-multi-line',
    'function-parentheses-space-inside': 'never-single-line',
    'function-url-no-scheme-relative': null,
    'function-url-quotes': 'always',
    'function-url-scheme-disallowed-list': null,
    'function-url-scheme-allowed-list': null,
    'function-allowed-list': null,
    'function-whitespace-after': 'always',
    'indentation': 2,
    'keyframe-declaration-no-important': true,
    'keyframes-name-pattern': '^([a-z][a-z0-9]*)(-[a-z0-9]+)*$',
    'length-zero-no-unit': true,
    'linebreaks': 'unix',
    'max-empty-lines': 1,
    'max-line-length': [
      120,
      {
        ignore: [ 'comments' ],
        ignorePattern: [
          '/^@import\\s+/',
          '/(https?:)?//[0-9,a-z]*.*/',
          '/\\.\\.?\\/[^\\n"?:*<>|]+\\.[A-z0-9]+/g'
        ]
      }
    ],
    'max-nesting-depth': null,
    'media-feature-colon-space-after': 'always',
    'media-feature-colon-space-before': 'never',
    'media-feature-name-disallowed-list': null,
    'media-feature-name-case': 'lower',
    'media-feature-name-no-unknown': true,
    'media-feature-name-no-vendor-prefix': true,
    'media-feature-name-value-allowed-list': null,
    'media-feature-name-allowed-list': null,
    'media-feature-parentheses-space-inside': 'never',
    'media-feature-range-operator-space-after': 'always',
    'media-feature-range-operator-space-before': 'always',
    'media-query-list-comma-newline-after': 'always-multi-line',
    'media-query-list-comma-newline-before': 'never-multi-line',
    'media-query-list-comma-space-after': 'always-single-line',
    'media-query-list-comma-space-before': 'never',
    'no-descending-specificity': null,
    'no-duplicate-at-import-rules': true,
    'no-duplicate-selectors': true,
    'no-empty-first-line': true,
    'no-empty-source': true,
    'no-eol-whitespace': true,
    'no-extra-semicolons': true,
    'scss/no-global-function-names': null,
    'no-invalid-double-slash-comments': true,
    'no-missing-end-of-source-newline': true,
    'no-unknown-animations': true,
    'number-leading-zero': 'never',
    'number-max-precision': 4,
    'number-no-trailing-zeros': true,
    'property-disallowed-list': null,
    'property-case': 'lower',
    'property-no-unknown': true,
    'property-no-vendor-prefix': true,
    'property-allowed-list': null,
    'rule-empty-line-before': [
      'always-multi-line',
      {
        except: [ 'first-nested' ],
        ignore: [ 'after-comment' ]
      }
    ],
    'selector-attribute-brackets-space-inside': 'never',
    'selector-attribute-operator-disallowed-list': null,
    'selector-attribute-operator-allowed-list': null,
    'selector-attribute-operator-space-after': 'never',
    'selector-attribute-operator-space-before': 'never',
    'selector-attribute-quotes': 'always',
    'selector-class-pattern': null,
    'selector-combinator-space-after': 'always',
    'selector-combinator-space-before': 'always',
    'selector-combinator-disallowed-list': null,
    'selector-combinator-allowed-list': null,
    'selector-descendant-combinator-no-non-space': true,
    'selector-id-pattern': null,
    'selector-list-comma-newline-after': 'always',
    'selector-list-comma-newline-before': 'never-multi-line',
    'selector-list-comma-space-after': 'always-single-line',
    'selector-list-comma-space-before': 'never',
    'selector-max-attribute': null,
    'selector-max-class': null,
    'selector-max-combinators': null,
    'selector-max-compound-selectors': null,
    'selector-max-empty-lines': 0,
    'selector-max-id': 1,
    'selector-max-pseudo-class': 5,
    'selector-max-specificity': null,
    'selector-max-type': null,
    'selector-max-universal': 1,
    'selector-nested-pattern': null,
    'selector-no-qualifying-type': null,
    'selector-no-vendor-prefix': true,
    'selector-pseudo-class-disallowed-list': null,
    'selector-pseudo-class-case': 'lower',
    'selector-pseudo-class-no-unknown': true,
    'selector-pseudo-class-parentheses-space-inside': 'never',
    'selector-pseudo-class-allowed-list': null,
    'selector-pseudo-element-disallowed-list': null,
    'selector-pseudo-element-case': 'lower',
    'selector-pseudo-element-colon-notation': null,
    'selector-pseudo-element-no-unknown': true,
    'selector-pseudo-element-allowed-list': null,
    'selector-type-case': 'lower',
    'selector-type-no-unknown': true,
    'shorthand-property-no-redundant-values': true,
    'string-no-newline': true,
    'string-quotes': 'single',
    'time-min-milliseconds': 100,
    'unit-disallowed-list': null,
    'unit-case': 'lower',
    'unit-no-unknown': true,
    'unit-allowed-list': null,
    'value-keyword-case': 'lower',
    'value-list-comma-newline-after': 'always-multi-line',
    'value-list-comma-newline-before': 'never-multi-line',
    'value-list-comma-space-after': 'always-single-line',
    'value-list-comma-space-before': 'never',
    'value-list-max-empty-lines': 0,
    'value-no-vendor-prefix': true
  }
};
