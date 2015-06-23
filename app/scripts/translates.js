'use strict';

angular.module('geomeditApp')
  .config(['$translateProvider', function($translateProvider) {
    var lang = navigator ? (navigator.language || navigator.userLanguage) : null;

    $translateProvider
      .translations('en', {
        Languages:   'UI language',
        ShowTooltip: 'Show tooltip',
        SnapOptions: 'Snapping options',
        SnapVertex:  'Snap to vertex',
        SnapMid:     'Snap to midpoint',
        SnapCross:   'Snap to intersection',
        SnapGlider:  'Snap to edge',
        ProjectMode: 'Large screen projection',

        ProjectName: 'Geometry Online',
        ProjectDesc: 'Dynamic Mathematics with JSXGraph',
        Blog:        'Blog',
        StartSketch: 'Start for sketch',

        Loading:         'Loading...',
        Cmd_:            'Select',
        CmdPoint:        'Point',
        CmdMidpoint:     'Midpoint',
        CmdIntersection: 'Intersection',
        CmdPerpPoint:    'Perpendicular point',
        CmdReflection:   'Reflected point',
        CmdInCenter:     'Inscribed center',
        CmdSegment:      'Segment',
        CmdRay:          'Half-line',
        CmdLine:         'Infinite line',
        CmdParallel:     'Parallel line',
        CmdBisector:     'Angle bisector',
        CmdTriangle:     'Triangle',
        CmdQuadrangle:   'Quadrangle',
        CmdCircle2p:     'Circle with center',
        CmdCircle3p:     'Circle through 3 points',
        CmdInCircle:     'Inscribed circle',

        SelectShape:       'Please select a shape.',
        SelectOption:      'Select',
        FaceCircle:        'Circle',
        FaceCross:         'Cross',
        FacePlus:          'Plus',
        FaceDiamond:       'Diamond',
        FaceSquare:        'Square',
        FaceUpTriangle:    'Up triangle',
        FaceDownTriangle:  'Down triangle',
        FaceLeftTriangle:  'Left triangle',
        FaceRightTriangle: 'Right triangle',
        PosLeft:           'Left',
        PosRight:          'Right',
        PosCenter:         'Center',
        SolidLine:         'Solid line',
        DottedLine:        'Dotted line',
        SmallDashes:       'Small dashes',
        MediumDashes:      'Medium dashes',
        BigDashes:         'Big dashes',
        LargeGaps:         'Large gaps -.-',
        SmallGaps:         'Small gaps -.-',

        PropLabel:         'Label',
        PropText:          'Text',
        PropFontSize:      'Text size',
        PropTextColor:     'Text color',
        PropFixed:         'Fixed',
        PropTrace:         'Trace',
        PropRange:         'Range',
        PropSnapWidth:     'Snap width',
        PropFace:          'Face',
        PropSize:          'Size',
        PropPosition:      'Position',
        PropOffset:        'Offset',
        PropDash:          'Dash',
        PropStrokeWidth:   'Stroke width',
        PropStrokeColor:   'Stroke color',
        PropStrokeOpacity: 'Stroke opacity',
        PropFillColor:     'Fill color',
        PropFillOpacity:   'Fill opacity',
        PropColor:         'Color',
        PropOpacity:       'Opacity',
        PropHideColor:     'Hide color bar',
        PropExpandColor:   'Show color bar',
        PropCoords:        'Coords',
        PropSnapToGrid:    'Snap to a grid',
        PropSnapToPoints:  'Snap to the nearest point',
        PropZoomSize:      'Changes on zoom events',
        PropLineEndings:   'Line endings',
        PropRadius:        'Radius',
        PropCenterVisible: 'Show center',
        PropFunctionTerm:  'Function term',
        PropBoard:         'Drawing area',
        PropIgnoreLabels:  'Can drag labels',
        PropGrid:          'Grid',
        PropOrigin:        'Origin',
        PropUnits:         'Units',
        PropDrawLabels:    'Draw labels',
        PropDrawZero:      'Zero tick',
        PropInsertTicks:   'Auto insert ticks',
        PropScaleSymbol:   'Unit of labels',
        PropTicksDistance: 'Ticks distance',
        PropMajorHeight:   'Infinite tick line',
        PropMinorTicks:    'Minor ticks count',

        ShowSidebar:    'Show sidebar',
        HideSidebar:    'Hide sidebar',
        CancelCmd:      'Cancel the current command',
        Toolbox:        'Toolbox view',
        Properties:     'Properties view',
        ZoomIn:         'Zoom In',
        ZoomOut:        'Zoom Out',
        ZoomDefault:    'Default Zoom',
        ShowAllObjects: 'List all objects',
        HideObject:     'Hide object',
        ShowObject:     'Show object',
        HideLabel:      'Hide label',
        ShowLabel:      'Show label',
        ArrowLast:      'Arrow head at the second point',
        ArrowFirst:     'Arrow head at the first point',
        RestrictLast:   'Stop at the second point',
        RestrictFirst:  'Stop at the first point',
        RecreateBoard:  'Reset',
        Undo:           'Undo',
        Redo:           'Redo',
        DraggingMode:   'Enable to drag objects',
        Options:        'Options',
        Home:           'Home'
      })
      .translations('cn', {
        Languages:   '界面语言',
        ShowTooltip: '显示工具提示',
        SnapOptions: '捕捉选项',
        SnapVertex:  '允许捕捉顶点',
        SnapMid:     '允许捕捉中点',
        SnapCross:   '允许捕捉交点',
        SnapGlider:  '允许捕捉线上点',
        ProjectMode: '大屏投影模式',

        ProjectName: '几何绘图',
        ProjectDesc: '基于 JSXGraph 的在线动态几何编辑平台',
        Blog:        '博客',
        StartSketch: '开始绘图',

        Loading:         '正在加载...',
        Cmd_:            '选择',
        Point:           '点',
        CmdPoint:        '点',
        CmdMidpoint:     '中点',
        CmdIntersection: '交点',
        CmdPerpPoint:    '垂足',
        CmdReflection:   '对称点',
        CmdInCenter:     '三点内心',
        Line:            '直线',
        CmdSegment:      '线段',
        CmdRay:          '射线',
        CmdLine:         '直线',
        CmdParallel:     '平行线',
        CmdBisector:     '角平分线',
        Polygon:         '多边形',
        CmdTriangle:     '三角形',
        CmdQuadrangle:   '四边形',
        Circle:          '圆',
        CmdCircle2p:     '圆心圆',
        CmdCircle3p:     '过三点画圆',
        CmdInCircle:     '三点内切圆',

        SelectShape:       '请选择一个图形',
        SelectOption:      '选择',
        FaceCircle:        '圆点',
        FaceCross:         '叉号',
        FacePlus:          '加号',
        FaceDiamond:       '菱形',
        FaceSquare:        '方形',
        FaceUpTriangle:    '上三角形',
        FaceDownTriangle:  '下三角形',
        FaceLeftTriangle:  '左三角形',
        FaceRightTriangle: '右三角形',
        PosLeft:           '左侧',
        PosRight:          '右侧',
        PosCenter:         '中间',
        SolidLine:         '实线',
        DottedLine:        '点线',
        SmallDashes:       '短虚线',
        MediumDashes:      '中虚线',
        BigDashes:         '长虚线',
        LargeGaps:         '大间距点划线',
        SmallGaps:         '小间距点划线',

        PropLabel:         '标签',
        PropText:          '文字',
        PropFontSize:      '文字大小',
        PropTextColor:     '文字颜色',
        PropFixed:         '固定',
        PropTrace:         '跟踪位置',
        PropRange:         '变化范围',
        PropSnapWidth:     '捕捉宽度',
        PropFace:          '外观',
        PropSize:          '大小',
        PropPosition:      '位置',
        PropOffset:        '偏移',
        PropDash:          '虚线',
        PropStrokeWidth:   '线宽',
        PropStrokeColor:   '线条颜色',
        PropStrokeOpacity: '线条不透明度',
        PropFillColor:     '填充颜色',
        PropFillOpacity:   '填充不透明度',
        PropColor:         '颜色',
        PropOpacity:       '不透明度',
        PropHideColor:     '收起颜色条',
        PropExpandColor:   '展开颜色条',
        PropCoords:        '坐标',
        PropSnapToGrid:    '捕捉到网格点',
        PropSnapToPoints:  '捕捉到附近点',
        PropZoomSize:      '放缩时大小自适应',
        PropLineEndings:   '线端类型',
        PropRadius:        '半径',
        PropCenterVisible: '显示圆心',
        PropFunctionTerm:  '函数式',
        PropBoard:         '绘图区',
        PropIgnoreLabels:  '允许拖动标签',
        PropGrid:          '网格',
        PropOrigin:        '原点',
        PropUnits:         '单位',
        PropDrawLabels:    '显示刻度文字',
        PropDrawZero:      '显示零刻度',
        PropInsertTicks:   '自动插入刻度',
        PropScaleSymbol:   '刻度单位',
        PropTicksDistance: '刻度线距离',
        PropMajorHeight:   '主刻度线延长',
        PropMinorTicks:    '小刻度数',

        ShowSidebar:    '展开操作面板',
        HideSidebar:    '收起操作面板',
        CancelCmd:      '取消当前工具',
        Toolbox:        '工具',
        Properties:     '属性',
        ZoomIn:         '放大',
        ZoomOut:        '缩小',
        ZoomDefault:    '默认比例',
        ShowAllObjects: '列出所有图形',
        HideObject:     '隐藏本图形',
        ShowObject:     '显示本图形',
        HideLabel:      '隐藏标签',
        ShowLabel:      '显示标签',
        ArrowLast:      '终点有箭头',
        ArrowFirst:     '起点有箭头',
        RestrictLast:   '终点不延长',
        RestrictFirst:  '起点不延长',
        RecreateBoard:  '重置',
        Undo:           '撤销',
        Redo:           '重做',
        DraggingMode:   '允许拖动图形',
        Options:        '选项',
        Home:           '首页'
      })
      .preferredLanguage(lang && lang.toLowerCase().indexOf('cn') >= 0 ? 'cn' : 'en')
      .useSanitizeValueStrategy(null);
  }]);
