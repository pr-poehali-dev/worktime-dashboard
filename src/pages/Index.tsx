import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const mockProjects = [
  {
    id: 1,
    name: "Веб-приложение",
    hours: 32,
    totalHours: 40,
    status: "В процессе",
    color: "#3B82F6"
  },
  {
    id: 2,
    name: "Мобильное приложение",
    hours: 28,
    totalHours: 35,
    status: "Завершен",
    color: "#10B981"
  },
  {
    id: 3,
    name: "UX/UI Дизайн",
    hours: 15,
    totalHours: 25,
    status: "В процессе", 
    color: "#8B5CF6"
  }
];

const mockTasks = [
  { id: 1, name: "Создание макетов", time: "2:30", status: "completed" },
  { id: 2, name: "Код компонентов", time: "4:15", status: "in-progress" },
  { id: 3, name: "Тестирование", time: "1:45", status: "pending" }
];

const weeklyData = [
  { day: "ПН", hours: 8.5 },
  { day: "ВТ", hours: 7.2 },
  { day: "СР", hours: 9.1 },
  { day: "ЧТ", hours: 6.8 },
  { day: "ПТ", hours: 8.3 },
  { day: "СБ", hours: 4.2 },
  { day: "ВС", hours: 2.1 }
];

export default function Index() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const totalWeekHours = weeklyData.reduce((sum, day) => sum + day.hours, 0);
  const avgDailyHours = totalWeekHours / 5; // Рабочие дни

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
            Дашборд рабочего времени
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Отслеживайте продуктивность, анализируйте время и управляйте проектами
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-white shadow-sm border-0 hover:shadow-md transition-all duration-300 animate-fade-in">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm font-medium text-gray-600">Сегодня</p>
                  <p className="text-2xl font-bold text-gray-900">7ч 32м</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Icon name="Clock" size={24} className="text-blue-600" />
                </div>
              </div>
              <div className="mt-4">
                <Progress value={85} className="h-2" />
                <p className="text-xs text-gray-500 mt-2">85% от цели (8ч)</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-sm border-0 hover:shadow-md transition-all duration-300 animate-fade-in">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm font-medium text-gray-600">Эта неделя</p>
                  <p className="text-2xl font-bold text-gray-900">{totalWeekHours.toFixed(1)}ч</p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <Icon name="TrendingUp" size={24} className="text-green-600" />
                </div>
              </div>
              <div className="mt-4">
                <Progress value={Math.min((totalWeekHours / 40) * 100, 100)} className="h-2" />
                <p className="text-xs text-gray-500 mt-2">Средний день: {avgDailyHours.toFixed(1)}ч</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-sm border-0 hover:shadow-md transition-all duration-300 animate-fade-in">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm font-medium text-gray-600">Активных проектов</p>
                  <p className="text-2xl font-bold text-gray-900">3</p>
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <Icon name="FolderOpen" size={24} className="text-purple-600" />
                </div>
              </div>
              <div className="mt-4 flex gap-1">
                {mockProjects.map((project) => (
                  <div key={project.id} className="h-2 bg-gray-200 rounded flex-1">
                    <div 
                      className="h-full rounded"
                      style={{ 
                        backgroundColor: project.color, 
                        width: `${(project.hours / project.totalHours) * 100}%` 
                      }}
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-sm border-0 hover:shadow-md transition-all duration-300 animate-fade-in">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm font-medium text-gray-600">Продуктивность</p>
                  <p className="text-2xl font-bold text-gray-900">92%</p>
                </div>
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                  <Icon name="Zap" size={24} className="text-orange-600" />
                </div>
              </div>
              <div className="mt-4">
                <Progress value={92} className="h-2" />
                <p className="text-xs text-gray-500 mt-2">+5% к прошлой неделе</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Weekly Analytics Chart */}
          <Card className="lg:col-span-2 bg-white shadow-sm border-0 animate-fade-in">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="BarChart3" size={20} className="text-blue-600" />
                Аналитика недели
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-6">
                <div className="flex items-end justify-between h-48">
                  {weeklyData.map((day, index) => {
                    const maxHours = Math.max(...weeklyData.map(d => d.hours));
                    const height = (day.hours / maxHours) * 100;
                    return (
                      <div key={day.day} className="flex flex-col items-center space-y-2 flex-1">
                        <div className="relative w-8 bg-gray-100 rounded-t-lg overflow-hidden">
                          <div 
                            className="absolute bottom-0 w-full bg-gradient-to-t from-blue-500 to-blue-400 rounded-t-lg transition-all duration-1000 ease-out"
                            style={{ 
                              height: `${height}%`,
                              animationDelay: `${index * 100}ms`
                            }}
                          />
                        </div>
                        <div className="text-center">
                          <p className="text-xs font-medium text-gray-500">{day.day}</p>
                          <p className="text-sm font-semibold text-gray-900">{day.hours}ч</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="flex justify-between items-center pt-4 border-t">
                  <div className="text-sm text-gray-600">
                    <span className="font-medium">Общее время:</span> {totalWeekHours.toFixed(1)}ч
                  </div>
                  <Button variant="outline" size="sm">
                    <Icon name="Download" size={16} className="mr-2" />
                    Экспорт
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Calendar */}
          <Card className="bg-white shadow-sm border-0 animate-fade-in">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="Calendar" size={20} className="text-purple-600" />
                Календарь событий
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                className="rounded-md border-0"
              />
              <div className="mt-6 space-y-3">
                <h4 className="font-medium text-gray-900">Сегодняшние задачи</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-2 bg-blue-50 rounded-lg">
                    <span className="text-sm text-gray-700">Встреча с командой</span>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-700">14:00</Badge>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-green-50 rounded-lg">
                    <span className="text-sm text-gray-700">Код-ревью</span>
                    <Badge variant="secondary" className="bg-green-100 text-green-700">16:30</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Projects and Tasks Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Projects */}
          <Card className="bg-white shadow-sm border-0 animate-fade-in">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Icon name="Briefcase" size={20} className="text-indigo-600" />
                  Отчеты по проектам
                </div>
                <Button variant="ghost" size="sm">
                  <Icon name="Plus" size={16} />
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              {mockProjects.map((project) => (
                <div key={project.id} className="p-4 border border-gray-100 rounded-xl hover:shadow-sm transition-all duration-200">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-medium text-gray-900">{project.name}</h4>
                    <Badge 
                      variant={project.status === "Завершен" ? "default" : "secondary"}
                      className={project.status === "Завершен" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}
                    >
                      {project.status}
                    </Badge>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">{project.hours}ч / {project.totalHours}ч</span>
                      <span className="font-medium">{Math.round((project.hours / project.totalHours) * 100)}%</span>
                    </div>
                    <Progress 
                      value={(project.hours / project.totalHours) * 100} 
                      className="h-2"
                    />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Tasks */}
          <Card className="bg-white shadow-sm border-0 animate-fade-in">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Icon name="CheckSquare" size={20} className="text-emerald-600" />
                  Активные задачи
                </div>
                <Button variant="ghost" size="sm">
                  <Icon name="Plus" size={16} />
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              {mockTasks.map((task) => (
                <div key={task.id} className="flex items-center justify-between p-4 border border-gray-100 rounded-xl hover:shadow-sm transition-all duration-200">
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${
                      task.status === 'completed' ? 'bg-green-500' :
                      task.status === 'in-progress' ? 'bg-blue-500' : 'bg-gray-300'
                    }`} />
                    <span className="font-medium text-gray-900">{task.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="bg-gray-50">
                      {task.time}
                    </Badge>
                    <Button variant="ghost" size="sm">
                      <Icon name="Play" size={14} />
                    </Button>
                  </div>
                </div>
              ))}
              
              <div className="pt-4 border-t">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-600">Общее время задач</span>
                  <span className="text-lg font-bold text-gray-900">8ч 30м</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Settings Panel */}
        <Card className="bg-white shadow-sm border-0 animate-fade-in">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Icon name="Settings" size={20} className="text-gray-600" />
              Настройки пользователя
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-3">
                <h4 className="font-medium text-gray-900">Цели времени</h4>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Дневная цель</span>
                    <span className="font-medium">8 часов</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Недельная цель</span>
                    <span className="font-medium">40 часов</span>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="w-full">
                  Настроить
                </Button>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-medium text-gray-900">Уведомления</h4>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Перерывы</span>
                    <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Еженедельные отчеты</span>
                    <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="w-full">
                  Настроить
                </Button>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-medium text-gray-900">Экспорт данных</h4>
                <div className="space-y-2">
                  <Button variant="outline" size="sm" className="w-full">
                    <Icon name="Download" size={16} className="mr-2" />
                    CSV отчет
                  </Button>
                  <Button variant="outline" size="sm" className="w-full">
                    <Icon name="FileText" size={16} className="mr-2" />
                    PDF отчет
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}